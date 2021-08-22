const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {

    if (Object.keys(request.query) !== 0) {
      const suportedQuerry = ["maxPrice", "title", "createdAfter", "limit"];

      for (const param of Object.keys(request.query)) {
        if (suportedQuerry.indexOf(param) === -1)
          return response.json({ message: "This querry param is not supported" });
      }

      const maxPrice = parseInt(request.query.maxPrice);
      const title = request.query.title;
      const createdAfter = request.query.createdAfter;
      const limit = parseInt(request.query.limit);

      const filteredMeals = meals.filter(m =>
        (maxPrice ? (m.price < maxPrice) : true) &&
        (title ? (m.title.includes(title)) : true) &&
        (createdAfter ? (new Date(m.createdAt) > new Date(createdAfter)) : true)
      );

      if (!isNaN(limit) && limit > 0) {
        limitedList = filteredMeals.slice(0, limit);
        return response.send({ data: limitedList });
      }

      return response.send({ data: filteredMeals });
    }
    response.send({ data: meals });

  } catch (error) {
    throw response.send(400).json(error);
  }
});

router.get("/:id", async (request, response) => {
  if (isNaN(parseInt(request.params.id)))
    return response.status(406).json({ error: "Id is not a number" });
  try {
    const meal = meals.filter(meal => meal.id === parseInt(request.params.id));

    if (meal.length === 0)
      return response.json({ message: "No meal with this id found" });

    response.send({ data: meal });
  } catch (error) {
    throw response.send(400).json(error);
  }
});

module.exports = router;

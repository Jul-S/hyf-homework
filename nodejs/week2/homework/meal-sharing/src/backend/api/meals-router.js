const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {

    if (Object.keys(request.query) !== 0) {
      const suportedQuerry = ["maxPrice", "title", "createdAfter", "limit"];

      for (const param of Object.keys(request.query)) {
        if (suportedQuerry.indexOf(param) === -1)
          return response.send(400).json({ error: "This querry param is not supported" });
      }

      const maxPrice = request.query.maxPrice;
      const title = request.query.title;
      const createdAfter = request.query.createdAfter;
      const limit = request.query.limit;

      if (maxPrice && isNaN(parseInt(maxPrice))
        || createdAfter && isNaN(Date.parse(createdAfter))
        || limit && isNaN(parseInt(limit))
      )
        return response.send(400);


      let filteredMeals = meals.filter(m =>
        (maxPrice ? (m.price < parseInt(maxPrice)) : true) &&
        (title ? (m.title.includes(title)) : true) &&
        (createdAfter ? (new Date(m.createdAt) > Date.parse(createdAfter)) : true)
      );

      filteredMeals = limit ? filteredMeals.slice(0, parseInt(limit)) : filteredMeals;

      return response.send(filteredMeals);

    }
    response.send(meals);
  } catch (error) {
    throw response.send(400).json(error);
  }
});

router.get("/:id", async (request, response) => {
  if (isNaN(parseInt(request.params.id)))
    return response.status(400).json({ error: "Id is not a number" });
  try {
    const meal = meals.filter(meal => meal.id === parseInt(request.params.id));

    if (meal.length === 0)
      return response.json({ message: "No meal with this id found" });

    response.send(meal[0]);
  } catch (error) {
    console.log(error);
    throw response.send(400).json(error);
  }
});

module.exports = router;

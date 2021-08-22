const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send({ data: reviews });
  } catch (error) {
    throw response.send(400).json(error);
  }
});

router.get("/:id", async (request, response) => {
  if (isNaN(parseInt(request.params.id)))
    return response.status(406).json({ error: "Id is not a number" });
  try {
    const review = reviews.filter(review => review.id === parseInt(request.params.id));
    if (review.length === 0)
      return response.status(200).json({ message: "No review with this id found" });

    response.send({ data: review });
  } catch (error) {
    throw response.send(400).json(error);
  }
});

module.exports = router;

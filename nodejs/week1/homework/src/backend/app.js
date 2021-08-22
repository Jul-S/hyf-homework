const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
//creating helping functions
function getMealsWithReview() {
  return meals.map(meal => ({
    ...meal,
    "reviews": reviews.filter(review => review.mealId === meal.id)
  }))
};

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// adding routes here
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(getMealsWithReview());
});

app.get("/cheap-meals", async (request, response) => {
  response.send(getMealsWithReview().filter(meal => meal.price < 100));
});

app.get("/large-meals", async (request, response) => {
  response.send(getMealsWithReview().filter(meal => meal.maxNumberOfGuests > 5));
});

app.get("/meal", async (request, response) => {
  response.send(getRandom(meals));
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(getRandom(reservations));
});

module.exports = app;

const e = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if (Object.keys(request.query).length > 0) {
      console.log("inside query", request.query);

      if (request.query.maxPrice && !isNaN(Number(request.query.maxPrice))) {
        await knex("concerts").where('price', '>', Number(request.query.maxPrice))
          .then(rows => response.json(rows))
      }
      else if (request.query.title && typeof request.query.title === 'string') {
        await knex("concerts").where('title', 'like', `%${request.query.title}%`)
          .then(rows => response.json(rows));
      } else if (request.query.createdAfter && !isNaN(Date.parse(request.query.createdAfter))) {
        await knex("concerts").where('created_date', '>', '2020-01-01')
          .then(rows => response.json(rows));
      } else if (request.query.band && typeof request.query.band === 'string') {
        await knex("concerts").where('band', 'like', `%${request.query.band}%`)
          .then(rows => response.json(rows))
      }
    } else {
      console.log("no query found")
      response.json(concerts);
    }

  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const concert = request.body;
    await knex("concerts").insert(concert).then(
      data => response.json(data)
    );

  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    await knex("concerts").where({ id: Number(request.params.id) }).then(
      concert => response.json(concert)
    );

  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    await knex("concerts").where({ id: Number(request.params.id) }).update(
      request.body
    ).then(
      updated => updated ? response.json('Concert was updated') : response.json('Something went wrong')
    );

  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    await knex("concerts").where({ id: Number(request.params.id) }).delete().then(
      deleted => deleted ? response.json('Concert was deleted') : response.json('Something went wrong')
    );

  } catch (error) {
    throw error;
  }
});

module.exports = router;

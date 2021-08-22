const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send({ data: reservations });
  } catch (error) {
    throw response.send(400).json(error);
  }
});

router.get("/:id", async (request, response) => {
  if (isNaN(parseInt(request.params.id)))
    return response.status(406).json({ error: "Id is not a number" });
  try {
    const reservation = reservations.filter(reservation => reservation.id === parseInt(request.params.id));

    if (reservation.length === 0)
      return response.status(200).json({ message: "No reservation with this id found" });

    response.send({ data: reservation });
  } catch (error) {
    throw response.send(400).json(error);
  }
});

module.exports = router;

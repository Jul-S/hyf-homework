--create database tables
SET
  NAMES utf8mb4;
CREATE TABLE `meal` (
    `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` text NULL DEFAULT NULL,
    `location` varchar(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` int(10) unsigned NOT NULL,
    `price` DECIMAL(6, 2) unsigned NOT NULL,
    `created_date` DATETIME NOT NULL DEFAULT NOW()
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation` (
    `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `number_of_guests` int(10) unsigned NOT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `created_date` DATETIME NOT NULL DEFAULT NOW(),
    `contact_phonenumber` varchar(255) NOT NULL,
    `contact_name` varchar(255) NOT NULL,
    `contact_email` varchar(255) NOT NULL,
    CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `review` (
    `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `description` text NULL DEFAULT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `stars` int(10) unsigned NOT NULL,
    `created_date` DATETIME NOT NULL DEFAULT NOW(),
    CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
---------------------Meal Queries-------------------------
  -- Get all meals
SELECT
  *
FROM
  meal;
-- Add a new meal
INSERT INTO
  meal (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`
  )
VALUES
  (
    'BBq party',
    'HYF bbq party',
    'Valbypark',
    '2021-08-08 17:00:00',
    '40',
    '250.00'
  ),
  (
    'Breakfast meal',
    'Best breakfast in town',
    'Vesterbro',
    '2021-08-10 09:00:00',
    '10',
    '150.00'
  );
-- Get a meal with any id, fx 1
SELECT
  *
from
  meal
WHERE
  id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  meal
SET
  `title` = 'HYF yearly BBQ party',
  `location` = 'Valbypark'
WHERE
  id = 1;
-- Delete a meal with any id, fx 1
DELETE FROM
  meal
WHERE
  id = 2;
---------------------Reservation Queries-------------------------
  --   Get all reservations
SELECT
  *
FROM
  reservation;
-- Add a new reservation
INSERT INTO
  reservation (
    `number_of_guests`,
    `meal_id`,
    `contact_phonenumber`,
    `contact_email`,
    `contact_name`
  )
VALUES
  (
    11,
    1,
    '684694949',
    'john@mail.com',
    'John Do'
  ),
  (
    5,
    2,
    '000000000',
    'john2@mail.com',
    'Johnny Dohh'
  );
-- Get a reservation with any id, fx 1
SELECT
  *
from
  reservation
WHERE
  id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  reservation
SET
  `number_of_guests` = '40',
  `contact_name` = 'Donald Duck'
WHERE
  id = 1;
-- Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  id = 1;
--   ---------------------Reviews Queries-------------------------
  --   Get all reviews
SELECT
  *
from
  review;
-- Add a new review
INSERT INTO
  review (
    `title`,
    `description`,
    `meal_id`,
    `stars`
  )
VALUES
  (
    'Best meal I had!',
    'This was so great i can not give more stars',
    '1',
    '5'
  ),
  (
    'Should visit again!',
    'I recmmend this meal',
    '2',
    '3'
  );
-- Get a review with any id, fx 1
SELECT
  *
from
  review
WHERE
  id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  `stars` = '3'
WHERE
  id = 2;
-- Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  id = 1;
---------------------------------Additional queries-------------------------
  ----insert some data from previuose queries for this part to work---------
  --------------------------------------------------------------------------
  --   Get meals that has a price smaller than a specific price fx 90
SELECT
  *
FROM
  meal
WHERE
  price < 200;
-- Get meals that still has available reservations
SELECT
  meal.title,
  meal.max_reservations,
  reservation.number_of_guests
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  meal.max_reservations > reservation.number_of_guests;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
  *
FROM
  meal
WHERE
  title LIKE '%bbq%';
-- Get meals that has been created between two dates
SELECT
  *
FROM
  meal
WHERE
  created_date BETWEEN '2020-01-01'
  AND '2022-01-01';
-- Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  meal
LIMIT
  5;
-- Get the meals that have good reviewsSELECT
SELECT
  meal.title,
  review.stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
WHERE
  review.stars > 4;
-- Get reservations for a specific meal sorted by created_date
SELECT
  meal.title,
  meal.created_date,
  reservation.contact_name
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  meal.id = 1
ORDER BY
  created_date;
-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  AVG(review.stars) as Avg_stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal.id
ORDER BY
  Avg_stars desc;
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into
  task (
    id,
    title,
    description,
    created,
    updated,
    due_date,
    status_id
  )
values
  (
    '36',
    'Do homework',
    'Do sql queries and all the other stuff',
    '2021-08-01 06:54:16',
    '2021-08-01 13:05:09',
    '2021-08-08 13:05:09',
    1
  );
insert into
  user_task (task_id, user_id)
values
  ('36', '11');
-- Change the title of a task
UPDATE
  task
SET
  title = 'Do week 2 homework'
WHERE
  id = 36;
-- Change a task due date
UPDATE
  `task`
SET
  `due_date` = DATE_ADD(`created`, INTERVAL 3 DAY)
WHERE
  id = 36;
-- Change a task status
UPDATE
  `task`
SET
  `status_id` = 2
WHERE
  id = 36;
-- Mark a task as complete
UPDATE
  `task`
SET
  `status_id` = 3
WHERE
  id = 36;
-- Delete a task
DELETE FROM
  `task`
WHERE
  id = 36;
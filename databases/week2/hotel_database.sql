SET
  NAMES utf8mb4;
CREATE TABLE `guest` (
    `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `move_in` DATETIME NOT NULL,
    `move_out` DATETIME NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `status` (
    `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `room` (
    `id` int(10) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `type` varchar(255) NOT NULL,
    `number_of_guests` int(10) unsigned NOT NULL,
    `status_id` int(10) unsigned NOT NULL,
    CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `room_guest` (
    `room_id` int(10) unsigned NOT NULL,
    `guest_id` int(10) unsigned NOT NULL,
    PRIMARY KEY(`room_id`, `guest_id`),
    CONSTRAINT `fk_room_guest_room` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_room_guest_guest` FOREIGN KEY (`guest_id`) REFERENCES `guest` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
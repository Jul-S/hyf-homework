SET
  NAMES utf8mb4;
CREATE TABLE `class` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `student` (
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NULL,
    `class_id` int(10) unsigned NOT NULL,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE INDEX idx_name ON student (name);
ALTER TABLE
  class
ADD
  status ENUM('not-started', 'ongoing', 'finished');
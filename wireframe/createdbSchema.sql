CREATE SCHEMA IF NOT EXISTS `dbalkemychallenge`;

CREATE TABLE IF NOT EXISTS `dbalkemychallenge`.`categories` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE IF NOT EXISTS `dbalkemychallenge`.`transactiontypes` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45),
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `dbalkemychallenge`.`users` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45),
  `password` VARCHAR(45),
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `dbalkemychallenge`.`transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `concept` VARCHAR(45),
  `amount` DECIMAL(9,2),
  `date` DATETIME,
  `user_id` int(10),
  `type_id` INT(10),
  `category_id` INT(10),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`type_id`) REFERENCES `transactiontypes` (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
);

INSERT INTO transactiontypes (`type`) VALUES ("inflow");
INSERT INTO transactiontypes (`type`) VALUES ("outflow");
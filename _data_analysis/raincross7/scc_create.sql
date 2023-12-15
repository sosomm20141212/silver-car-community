CREATE DATABASE IF NOT EXISTS `scc`;
USE `scc`;

CREATE TABLE IF NOT EXISTS `account` (
  `user_id` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `admin` tinyint DEFAULT '0',
  `registration_date` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `posting` (
  `posting_seq` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `view` int NOT NULL DEFAULT '0',
  `registration_date` varchar(50) NOT NULL,
  PRIMARY KEY (`posting_seq`),
  KEY `user_id_posting_pk` (`user_id`),
  CONSTRAINT `user_id_posting_pk` FOREIGN KEY (`user_id`) REFERENCES `account` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `comment` (
  `comment_seq` int NOT NULL AUTO_INCREMENT,
  `posting_seq` int NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `content` varchar(255) NOT NULL,
  `group_seq` int NOT NULL,
  `registration_date` varchar(50) NOT NULL,
  PRIMARY KEY (`comment_seq`),
  KEY `user_id_comment_pk` (`user_id`),
  KEY `posting_seq_comment_pk` (`posting_seq`),
  CONSTRAINT `posting_seq_comment_pk` FOREIGN KEY (`posting_seq`) REFERENCES `posting` (`posting_seq`) ON DELETE CASCADE,
  CONSTRAINT `user_id_comment_pk` FOREIGN KEY (`user_id`) REFERENCES `account` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `vehicle` (
  `vehicle_name` varchar(50) NOT NULL,
  `manufacturer` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `color` varchar(50) DEFAULT NULL,
  `dimensions` varchar(50) DEFAULT NULL,
  `cargo_size` varchar(50) DEFAULT NULL,
  `load_capacity` varchar(50) DEFAULT NULL,
  `canopy` tinyint DEFAULT NULL,
  `wheels` int DEFAULT NULL,
  `wheel_size` varchar(50) DEFAULT NULL,
  `battery` varchar(50) DEFAULT NULL,
  `maximum_output` varchar(50) DEFAULT NULL,
  `maximum_speed` varchar(50) DEFAULT NULL,
  `mileage` varchar(50) DEFAULT NULL,
  `charging_time` varchar(50) DEFAULT NULL,
  `weight` varchar(50) DEFAULT NULL,
  `view` int DEFAULT '0',
  PRIMARY KEY (`vehicle_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `station` (
  `station_seq` int NOT NULL AUTO_INCREMENT,
  `station_name` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `start_week` varchar(50) DEFAULT NULL,
  `end_week` varchar(50) DEFAULT NULL,
  `start_saturday` varchar(50) DEFAULT NULL,
  `end_saturday` varchar(50) DEFAULT NULL,
  `start_holiday` varchar(50) DEFAULT NULL,
  `end_holiday` varchar(50) DEFAULT NULL,
  `simultaneous_users` varchar(10) DEFAULT NULL,
  `air_injection` varchar(10) DEFAULT NULL,
  `phone_charging` varchar(10) DEFAULT NULL,
  `agency` varchar(50) DEFAULT NULL,
  `call_number` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`station_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=3567 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `store` (
  `store_seq` int NOT NULL,
  `store_name` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `call_number` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`store_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
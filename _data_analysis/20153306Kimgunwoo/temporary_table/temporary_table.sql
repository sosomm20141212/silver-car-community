-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.34 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- silver_car_community 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `silver_car_community` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `silver_car_community`;

-- 테이블 silver_car_community.car_review 구조 내보내기
CREATE TABLE IF NOT EXISTS `car_review` (
  `seq` int NOT NULL,
  `review` varchar(255) DEFAULT NULL,
  `star_point` float NOT NULL,
  `member_id` varchar(50) NOT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 silver_car_community.free_posting 구조 내보내기
CREATE TABLE IF NOT EXISTS `free_posting` (
  `seq` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text,
  `search_count` int DEFAULT '1',
  `register_date` date DEFAULT NULL,
  `member_id` varchar(50) NOT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 silver_car_community.free_posting_answer 구조 내보내기
CREATE TABLE IF NOT EXISTS `free_posting_answer` (
  `seq` int NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `answer_register_time` date DEFAULT NULL,
  `member_id` varchar(50) NOT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 silver_car_community.free_posting_upload 구조 내보내기
CREATE TABLE IF NOT EXISTS `free_posting_upload` (
  `UUID` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `member_id` varchar(50) NOT NULL,
  PRIMARY KEY (`UUID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 silver_car_community.member 구조 내보내기
CREATE TABLE IF NOT EXISTS `member` (
  `member_id` varchar(50) NOT NULL,
  `member_password` varchar(50) NOT NULL,
  `member_name` varchar(50) NOT NULL,
  `member_phonenumber` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 silver_car_community.question_and_answer 구조 내보내기
CREATE TABLE IF NOT EXISTS `question_and_answer` (
  `seq` int NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `member_id` varchar(50) NOT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 silver_car_community.store_information 구조 내보내기
CREATE TABLE IF NOT EXISTS `store_information` (
  `store_name` varchar(100) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`store_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 내보낼 데이터가 선택되어 있지 않습니다.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

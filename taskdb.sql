-- MySQL dump 10.13  Distrib 8.4.6, for Linux (x86_64)
--
-- Host: localhost    Database: task_db
-- ------------------------------------------------------
-- Server version	8.4.6-0ubuntu0.25.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `priority` tinyint DEFAULT '2',
  `is_done` tinyint(1) DEFAULT '0',
  `last_done` datetime DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,'Minum air 8 gelas','Jaga hidrasi harian',2,1,'2025-10-24 08:00:00','2025-10-26 23:59:59','2025-10-30 15:05:07','2025-10-30 16:27:06'),(2,'Push-up 20x','Olahraga pagi',3,0,'2025-10-24 07:30:00','2025-10-25 07:00:00','2025-10-30 15:05:07','2025-10-30 16:30:35'),(3,'Baca 30 menit','Self improvement',2,0,'2025-10-23 21:00:00','2025-10-25 22:00:00','2025-10-30 15:05:07','2025-10-30 16:31:57'),(4,'Meditasi','Tenangin pikiran',1,0,'2025-10-22 06:00:00','2025-10-26 06:00:00','2025-10-30 15:05:07','2025-10-30 16:31:22'),(6,'Membersihkan kamar','Organisir & bersih-bersih',2,0,'2025-10-24 18:00:00','2025-10-25 18:00:00','2025-10-30 15:05:07','2025-10-30 16:27:02'),(7,'Coding practice','Belajar React & Node',3,1,'2025-10-23 14:00:00','2025-10-26 14:00:00','2025-10-30 15:05:07','2025-10-30 16:21:00'),(8,'Rafi grib','Rafi grib',3,0,NULL,'2025-10-31 23:59:00','2025-10-30 16:32:49','2025-10-30 16:32:49');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-30 16:50:52

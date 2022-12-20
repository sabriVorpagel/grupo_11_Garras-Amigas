-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: garrasamigas
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Productos','2022-12-20 00:25:46',NULL,NULL),(2,'Juguetes','2022-12-20 00:25:46',NULL,NULL),(3,'Camas','2022-12-20 00:25:46',NULL,NULL),(4,'Ropa','2022-12-20 00:25:46',NULL,NULL),(5,'Comida','2022-12-20 00:25:46',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (35,'images-1671498012791.jpg',35,'2022-12-20 01:00:12','2022-12-20 01:00:12',NULL),(36,'images-1671498012792.jpg',35,'2022-12-20 01:00:12','2022-12-20 01:00:12',NULL),(37,'images-1671498012795.jpg',35,'2022-12-20 01:00:12','2022-12-20 01:00:12',NULL),(38,'images-1671498092356.png',36,'2022-12-20 01:01:32','2022-12-20 01:01:32',NULL),(39,'images-1671498092357.png',36,'2022-12-20 01:01:32','2022-12-20 01:01:32',NULL),(40,'images-1671498092358.png',36,'2022-12-20 01:01:32','2022-12-20 01:01:32',NULL),(41,'images-1671498194182.jpg',37,'2022-12-20 01:03:14','2022-12-20 01:03:14',NULL),(42,'images-1671498194182.jpg',37,'2022-12-20 01:03:14','2022-12-20 01:03:14',NULL),(43,'images-1671498194185.jpg',37,'2022-12-20 01:03:14','2022-12-20 01:03:14',NULL),(44,'images-1671498262349.jpg',38,'2022-12-20 01:04:22','2022-12-20 01:04:22',NULL),(45,'images-1671498262350.jpg',38,'2022-12-20 01:04:22','2022-12-20 01:04:22',NULL),(46,'images-1671498262351.jpg',38,'2022-12-20 01:04:22','2022-12-20 01:04:22',NULL),(47,'images-1671498408657.jpg',39,'2022-12-20 01:06:48','2022-12-20 01:06:48',NULL),(48,'images-1671498408657.jpg',39,'2022-12-20 01:06:48','2022-12-20 01:06:48',NULL),(49,'images-1671498408659.jpg',39,'2022-12-20 01:06:48','2022-12-20 01:06:48',NULL),(50,'images-1671498586246.jpg',40,'2022-12-20 01:09:46','2022-12-20 01:09:46',NULL),(51,'images-1671498586247.jpg',40,'2022-12-20 01:09:46','2022-12-20 01:09:46',NULL),(52,'images-1671498586248.jpg',40,'2022-12-20 01:09:46','2022-12-20 01:09:46',NULL),(53,'images-1671498676457.jpg',41,'2022-12-20 01:11:16','2022-12-20 01:11:16',NULL),(54,'images-1671498676458.jpg',41,'2022-12-20 01:11:16','2022-12-20 01:11:16',NULL),(55,'images-1671498676458.jpg',41,'2022-12-20 01:11:16','2022-12-20 01:11:16',NULL),(56,'images-1671498759739.jpg',42,'2022-12-20 01:12:39','2022-12-20 01:12:39',NULL),(57,'images-1671498759740.jpg',42,'2022-12-20 01:12:39','2022-12-20 01:12:39',NULL),(58,'images-1671498759740.jpg',42,'2022-12-20 01:12:39','2022-12-20 01:12:39',NULL),(59,'images-1671498827910.jpg',43,'2022-12-20 01:13:47','2022-12-20 01:13:47',NULL),(60,'images-1671498827910.jpg',43,'2022-12-20 01:13:47','2022-12-20 01:13:47',NULL),(61,'images-1671498827910.jpg',43,'2022-12-20 01:13:47','2022-12-20 01:13:47',NULL),(62,'images-1671498903080.jpg',44,'2022-12-20 01:15:03','2022-12-20 01:15:03',NULL),(63,'images-1671498903080.jpg',44,'2022-12-20 01:15:03','2022-12-20 01:15:03',NULL),(64,'images-1671498903080.jpg',44,'2022-12-20 01:15:03','2022-12-20 01:15:03',NULL),(65,'images-1671498977606.jpg',45,'2022-12-20 01:16:17','2022-12-20 01:16:17',NULL),(66,'images-1671498977606.jpg',45,'2022-12-20 01:16:17','2022-12-20 01:16:17',NULL),(67,'images-1671498977606.jpg',45,'2022-12-20 01:16:17','2022-12-20 01:16:17',NULL),(68,'images-1671499080295.jpg',46,'2022-12-20 01:18:00','2022-12-20 01:18:00',NULL),(69,'images-1671499080297.jpg',46,'2022-12-20 01:18:00','2022-12-20 01:18:00',NULL),(70,'images-1671499080298.jpg',46,'2022-12-20 01:18:00','2022-12-20 01:18:00',NULL),(71,'images-1671499135186.jpg',47,'2022-12-20 01:18:55','2022-12-20 01:18:55',NULL),(72,'images-1671499135186.jpg',47,'2022-12-20 01:18:55','2022-12-20 01:18:55',NULL),(73,'images-1671499135186.jpg',47,'2022-12-20 01:18:55','2022-12-20 01:18:55',NULL),(74,'images-1671499185719.jpg',48,'2022-12-20 01:19:45','2022-12-20 01:19:45',NULL),(75,'images-1671499185719.jpg',48,'2022-12-20 01:19:45','2022-12-20 01:19:45',NULL),(76,'images-1671499185719.jpg',48,'2022-12-20 01:19:45','2022-12-20 01:19:45',NULL),(77,'images-1671499390372.jpg',49,'2022-12-20 01:23:10','2022-12-20 01:23:10',NULL),(78,'images-1671499390372.jpg',49,'2022-12-20 01:23:10','2022-12-20 01:23:10',NULL),(79,'images-1671499390372.jpg',49,'2022-12-20 01:23:10','2022-12-20 01:23:10',NULL),(80,'images-1671499479099.jpg',50,'2022-12-20 01:24:39','2022-12-20 01:24:39',NULL),(81,'images-1671499479099.jpg',50,'2022-12-20 01:24:39','2022-12-20 01:24:39',NULL),(82,'images-1671499479099.jpg',50,'2022-12-20 01:24:39','2022-12-20 01:24:39',NULL),(83,'images-1671499538921.jpg',51,'2022-12-20 01:25:38','2022-12-20 01:25:38',NULL),(84,'images-1671499538921.jpg',51,'2022-12-20 01:25:38','2022-12-20 01:25:38',NULL),(85,'images-1671499538921.jpg',51,'2022-12-20 01:25:38','2022-12-20 01:25:38',NULL),(86,'images-1671499592319.jpg',52,'2022-12-20 01:26:32','2022-12-20 01:26:32',NULL),(87,'images-1671499592319.jpg',52,'2022-12-20 01:26:32','2022-12-20 01:26:32',NULL),(88,'images-1671499592321.jpg',52,'2022-12-20 01:26:32','2022-12-20 01:26:32',NULL),(89,'images-1671499717437.jpg',53,'2022-12-20 01:28:37','2022-12-20 01:28:37',NULL),(90,'images-1671499717438.jpg',53,'2022-12-20 01:28:37','2022-12-20 01:28:37',NULL),(91,'images-1671499717438.jpg',53,'2022-12-20 01:28:37','2022-12-20 01:28:37',NULL),(92,'images-1671499769108.jpg',54,'2022-12-20 01:29:29','2022-12-20 01:29:29',NULL),(93,'images-1671499769108.jpg',54,'2022-12-20 01:29:29','2022-12-20 01:29:29',NULL),(94,'images-1671499769108.jpg',54,'2022-12-20 01:29:29','2022-12-20 01:29:29',NULL),(95,'images-1671499811080.jpg',55,'2022-12-20 01:30:11','2022-12-20 01:30:11',NULL),(96,'images-1671499811081.jpg',55,'2022-12-20 01:30:11','2022-12-20 01:30:11',NULL),(97,'images-1671499811081.jpg',55,'2022-12-20 01:30:11','2022-12-20 01:30:11',NULL),(98,'images-1671499928823.jpg',56,'2022-12-20 01:32:08','2022-12-20 01:32:08',NULL),(99,'images-1671499928823.jpg',56,'2022-12-20 01:32:08','2022-12-20 01:32:08',NULL),(100,'images-1671499928823.jpg',56,'2022-12-20 01:32:08','2022-12-20 01:32:08',NULL),(101,'images-1671499980356.jpg',57,'2022-12-20 01:33:00','2022-12-20 01:33:00',NULL),(102,'images-1671499980356.jpg',57,'2022-12-20 01:33:00','2022-12-20 01:33:00',NULL),(103,'images-1671499980357.jpg',57,'2022-12-20 01:33:00','2022-12-20 01:33:00',NULL),(104,'images-1671500027522.jpg',58,'2022-12-20 01:33:47','2022-12-20 01:33:47',NULL),(105,'images-1671500027522.jpg',58,'2022-12-20 01:33:47','2022-12-20 01:33:47',NULL),(106,'images-1671500027522.jpg',58,'2022-12-20 01:33:47','2022-12-20 01:33:47',NULL),(107,'images-1671500076017.jpg',59,'2022-12-20 01:34:36','2022-12-20 01:34:36',NULL),(108,'images-1671500076017.jpg',59,'2022-12-20 01:34:36','2022-12-20 01:34:36',NULL),(109,'images-1671500076017.jpg',59,'2022-12-20 01:34:36','2022-12-20 01:34:36',NULL),(110,'images-1671500119511.jpg',60,'2022-12-20 01:35:19','2022-12-20 01:35:19',NULL),(111,'images-1671500119511.jpg',60,'2022-12-20 01:35:19','2022-12-20 01:35:19',NULL),(112,'images-1671500119511.jpg',60,'2022-12-20 01:35:19','2022-12-20 01:35:19',NULL),(113,'images-1671500173237.jpg',61,'2022-12-20 01:36:13','2022-12-20 01:36:13',NULL),(114,'images-1671500173237.jpg',61,'2022-12-20 01:36:13','2022-12-20 01:36:13',NULL),(115,'images-1671500173238.jpg',61,'2022-12-20 01:36:13','2022-12-20 01:36:13',NULL),(116,'images-1671500245556.jpg',62,'2022-12-20 01:37:25','2022-12-20 01:37:25',NULL),(117,'images-1671500245556.jpg',62,'2022-12-20 01:37:25','2022-12-20 01:37:25',NULL),(118,'images-1671500245556.jpg',62,'2022-12-20 01:37:25','2022-12-20 01:37:25',NULL),(119,'images-1671500295116.jpg',63,'2022-12-20 01:38:15','2022-12-20 01:38:15',NULL),(120,'images-1671500295117.jpg',63,'2022-12-20 01:38:15','2022-12-20 01:38:15',NULL),(121,'images-1671500295117.jpg',63,'2022-12-20 01:38:15','2022-12-20 01:38:15',NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payroles`
--

LOCK TABLES `payroles` WRITE;
/*!40000 ALTER TABLE `payroles` DISABLE KEYS */;
INSERT INTO `payroles` VALUES (1,'Efectivo','2022-12-20 00:25:46',NULL,NULL),(2,'Debito','2022-12-20 00:25:46',NULL,NULL),(3,'Credito','2022-12-20 00:25:46',NULL,NULL),(4,'Mercado Pago','2022-12-20 00:25:46',NULL,NULL);
/*!40000 ALTER TABLE `payroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (35,'Pelota de Goma',2500,300,23,'Este es un juguete colorido y divertido No solo es un juguete, sino también un dispensador de comida con velocidad lenta.',NULL,'2022-12-20 01:00:12','2022-12-20 01:00:12',NULL),(36,'Alimento Maxxium Premium Plus',9560,53,15,'Para perro adulto todos los tamaños sabor mix en bolsa de veinte kg',NULL,'2022-12-20 01:01:32','2022-12-20 01:01:32',NULL),(37,'Pesa De Goma Juguete Para Perros',1000,60,5,'Colores Rosa verde o azul Medida catorce cm aproximados Juguete de excelente calidad para que tu mascota se entretenga',NULL,'2022-12-20 01:03:14','2022-12-20 01:03:14',NULL),(38,'Juguete Pesa Dental',1500,20,5,'Sus protuberancias masajean las encías y ayudan a limpiar los dientes y espacios interdentales',NULL,'2022-12-20 01:04:22','2022-12-20 01:04:22',NULL),(39,'Torre de gato',17000,10,20,'  Elegante diseño de cactus el poste rascador estético con forma de cactus con aspecto saturado de color seguramente llamará toda la atención de tu gato y añadirá un elemento único a tu hogar moderno',NULL,'2022-12-20 01:06:48','2022-12-20 01:06:48',NULL),(40,'Suéter de invierno para gatos',4500,26,50,'Ultra suave y cálido El material de alta calidad hace que el suéter para perro sea súper suave y cómodo de llevar y retiene el calor corporal de tu mascota',NULL,'2022-12-20 01:09:46','2022-12-20 01:09:46',NULL),(41,'Suéteres de Perro de Tela de Invierno',6000,13,30,'Suave y térmica la chaqueta de forro polar para perro está hecha de material polar de calidad que es suave y agradable al tacto no daña la piel del perro se puede aplicar con confianza',NULL,'2022-12-20 01:11:16','2022-12-20 01:11:16',NULL),(42,'Capa Harry Potter',7500,36,30,'Material de alta calidad la capa para mascotas está hecha de material de satén de alta calidad que es suave y cómodo ligero y duradero y no se siente restringido en las mascotas',NULL,'2022-12-20 01:12:39','2022-12-20 01:12:39',NULL),(43,'Arnés Reflectante para Mascotas',13000,5,42,'Comodidad y seguridad combinado con un diseño ergonómico se adapta al cuerpo de la mascota y el material es suave y transpirable Si quieres la máxima comodidad, el babero es una excelente opción',NULL,'2022-12-20 01:13:47','2022-12-20 01:13:47',NULL),(44,'Juego de arnés y correa para perro',12000,21,5,'Sin tirones y ajustable: menos cobertura, más comodidad: lleva un diseño envolvente de trescientos sesenta grados y malla de aire en el interior puede evitar dañar la piel del cachorro como sea posible y adopta un diseño de ajuste de cuatro puntos, se adapta al busto de la mascota para reducir la posibilidad de que se rompa.',NULL,'2022-12-20 01:15:03','2022-12-20 01:15:03',NULL),(45,'Arnes Correa',5000,63,25,'Fabricado en cien por ciento poliéster ligero de alta calidad y resistencia para brindar el máximo confort, distribuyendo uniformemente la presión de la correa en cuello y hombros sin riesgo de lastimarlo o dañar su pelo.',NULL,'2022-12-20 01:16:17','2022-12-20 01:16:17',NULL),(46,'Purina Friskies Party Mix',2500,130,34,'Una lata medio kilo – Purina Friskies, El pollo real es el ingrediente de primera',NULL,'2022-12-20 01:18:00','2022-12-20 01:18:00',NULL),(47,'Arenero para Gato',7860,42,30,'Arenero para gatos fabricado en plástico resistente y duradero; además es fácil de limpiar y no guarda olores ni manchas',NULL,'2022-12-20 01:18:55','2022-12-20 01:18:55',NULL),(48,'Bolsa de Transporte para mascotas',16000,63,25,'Bolsa de transporte de mascotas aprobada por la aerolínea Diseñado con un techo ventilado para cumplir con todas las regulaciones de las aerolíneas debajo de los asientos delanteros.',NULL,'2022-12-20 01:19:45','2022-12-20 01:19:45',NULL),(49,'Caja Portátil para Mascotas',12500,23,50,'Sorprendentemente espacioso nuestros transportadores son perfectos para animales que pesen hasta quince kilo Un mango de agarre suave hace que sea fácil de sostener.',NULL,'2022-12-20 01:23:10','2022-12-20 01:23:10',NULL),(50,'Casa para Mascotas',14600,3,55,'Casa de felpa para mascotas: hemos diseñado estas casas de interior para perros y gatos utilizando tela de poliéster de alta calidad y forro de espuma de poliéster suave.',NULL,'2022-12-20 01:24:39','2022-12-20 01:24:39',NULL),(51,'Cama para Perro Calientita Doble Vista',9000,13,32,'Doble vista reversible para todo el año. Lavable en casa.',NULL,'2022-12-20 01:25:38','2022-12-20 01:25:38',NULL),(52,'Jaula de dos niveles grande',16000,4,45,'Hecho de alambre de metal duradero con cierre de acero inoxidable con un acabado negro de capa electrónica para evitar el óxido',NULL,'2022-12-20 01:26:32','2022-12-20 01:26:32',NULL),(53,'Plato de Acero',600,34,5,'Apto para alimento seco, húmedo o líquidos. Con plástico antiderrapante color negro en la base. Altamente durable y resistente.',NULL,'2022-12-20 01:28:37','2022-12-20 01:28:37',NULL),(54,'Cuenco de Comida Lenta',700,84,10,'los tazones para perros tienen huesos para extender las comidas para ayudar a reducir el tiempo de comida de su perro.',NULL,'2022-12-20 01:29:29','2022-12-20 01:29:29',NULL),(55,'Plato Plegable para Viaje',760,74,5,'Se limpia fácilmente y puedes usarlo para agua o para alimento. Ideal para viajes o paseos. Incluye gancho de sujeción. Medidas: 13 cm de diámetro. 5.5 cm de altura máxima.',NULL,'2022-12-20 01:30:11','2022-12-20 01:30:11',NULL),(56,'Alimentador de Semillas para Aves',4000,13,6,'Seis estaciones de alimentación con percha. Depósito transparente para un fácil control de los niveles de semilla. Fácil de llenar y limpiar.',NULL,'2022-12-20 01:32:08','2022-12-20 01:32:08',NULL),(57,'Bandeja colgante para pájaros',6000,3,25,'Diseño funcional: la bandeja de comedero para pájaros está diseñada para atraer la atención de los pájaros y no se volverá cuando los pájaros se mantengan en el lateral del comedero para pájaros para alimentos.',NULL,'2022-12-20 01:33:00','2022-12-20 01:33:00',NULL),(58,'Placas de Identificación para Perros Gatos',1200,136,30,'Personalizadas Encantador Símbolos Collares Accesorio para Mascotas Nombre Sencillo Personalizado',NULL,'2022-12-20 01:33:47','2022-12-20 01:33:47',NULL),(59,'Torre Play Juguete para Gato',1400,26,10,'Los juguetes para gato Play de Fancy Pets están diseñados para fomentar el instinto cazador de tu pequeño felino.',NULL,'2022-12-20 01:34:36','2022-12-20 01:34:36',NULL),(60,'Rascador Para Gato',4580,6,5,'El poste rascador de Carpentarias ofrece la oportunidad de que su gato juegue, explore, arañe o simplemente se relaje. Al contar con un poste rascador evita que su gato quiera afilar sus uñas en sus muebles o alfombras.',NULL,'2022-12-20 01:35:19','2022-12-20 01:35:19',NULL),(61,'Bola de pared con hierba gatera',800,42,5,'La bola favorita de los tres gatos se coloca en la placa de la muesca, cada una de las cuales se puede quitar pero usar sola',NULL,'2022-12-20 01:36:13','2022-12-20 01:36:13',NULL),(62,'Cepillo para perro',3000,6,10,'Cepillo ideal para dejar el manto de tu mascota suave y sedoso. Sus materiales permiten remover el pelo muerto sin lastimar la piel de la mascota.',NULL,'2022-12-20 01:37:25','2022-12-20 01:37:25',NULL),(63,'kit cepillo cortaúñas peine',5000,22,20,'obtén herramientas esenciales de aseo para perros y gatos en una sola pasada. Este juego incluye un cepillo para desenredar, peine de acero inoxidable y cortaúñas para mascotas de alta resistencia.',NULL,'2022-12-20 01:38:15','2022-12-20 01:38:15',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'Admin','2022-12-20 00:25:46',NULL,NULL),(2,'User','2022-12-20 00:25:46',NULL,NULL);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20221020142436-create-category.js'),('20221020143659-create-product.js'),('20221020144217-create-image.js'),('20221020144412-create-rol.js'),('20221020144414-create-user.js'),('20221020145033-create-payrole.js'),('20221020145212-create-state.js'),('20221020145314-create-order.js'),('20221020145516-create-cart.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Pendiente','2022-12-20 00:25:46',NULL,NULL),(2,'Retrasado','2022-12-20 00:25:46',NULL,NULL),(3,'In pago','2022-12-20 00:25:46',NULL,NULL),(4,'Finalizado','2022-12-20 00:25:46',NULL,NULL);
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Garras','Amigas','garrasamigas@gmail.com','$2a$10$6EgmzbXTLNoCQtIjPb1U7.B1OzlVEb39zvFum2Y0JNoPmsjJQ8eO.','',123456789,'',1,'2022-12-20 00:25:46',NULL,NULL),(2,'Alberto','Flores','florees@gmail.com','$2a$10$a58qFSRdV/hlk.5G94Je6OT58WWpHl6AcGH.8BTROEaPGr0QJD8xK','Rivadavia',1122233351,'avatar-1671496581337.jpg',2,'2022-12-20 00:36:21','2022-12-20 00:36:21',NULL),(3,'Jorge','Ibañez','jorge12@gmail.com','$2a$10$7xT4naCrN6H5b1/x5UYAZesGK4kqPn5lh0eLll4zBadcNvTgWui8a','Turquia',1122563456,'avatar-1671496662561.png',2,'2022-12-20 00:37:42','2022-12-20 00:37:42',NULL),(4,'Juana','Rossi','rossi10@gmail.com','$2a$10$AbvIUTzqcxWWnIt5T7WtPeYscvZGOuFmR0x6/9MJg3Xju5TSNUXA6','SantaClara',1145789360,'avatar-1671496731719.png',2,'2022-12-20 00:38:51','2022-12-20 00:38:51',NULL),(5,'Julian','alfonso','juancho@gmail.com','$2a$10$ZJ8KhplJgH6DtNyjUePoBuw10gwh1roWXc.XkQiL/RYtTe0/HowaG','SantaCruz',1134569874,'avatar-1671496850328.png',2,'2022-12-20 00:40:50','2022-12-20 00:40:50',NULL),(6,'Leandro','Lorenzo','lorenzoo_2@gmail.com','$2a$10$xcEsOKK95Is2HhR.sRwV2OSlgfl7OHiTizbSdkIiF9mDh5WdTfo5i','SantosPadres',1146257980,'avatar-1671496974643.png',2,'2022-12-20 00:42:54','2022-12-20 00:42:54',NULL),(7,'Lucia','Lopez','luuci@gmaill.com','$2a$10$rRPVnWnnchhk/g4n6g6M4OcrvwwZHGEmperk2FeubATms/VhF7dV.','RioNegro',1146253840,'avatar-1671497027711.jpg',2,'2022-12-20 00:43:47','2022-12-20 00:43:47',NULL),(8,'Luciano','Ruiz','ruiz45@gmail.com','$2a$10$12f.wuJWBJjVst032nPPDOMOfISVnwO6TyhQexaQOoR9RsGasCqAO','Catamarca',1134867523,'avatar-1671497089139.jpg',2,'2022-12-20 00:44:49','2022-12-20 00:44:49',NULL),(9,'Maria Lujan','Carbonilla','lujan15@gmail.com','$2a$10$T6IhTtNURmgBVrJEu49X/uJzYDxCAFw.nTwo0Jg/zNsSHY6jCNx6S','RioNilo',1452837230,'avatar-1671497149366.png',2,'2022-12-20 00:45:49','2022-12-20 00:45:49',NULL),(10,'Mariana','Gonzales','mariana25@gmail.com','$2a$10$SIU7B9HwuMe6P8RdlD.ZVe924FlTILAEFVWVeD22FmLXI6FDSXyQ.','Belgrano',1524638790,'avatar-1671497205524.png',2,'2022-12-20 00:46:45','2022-12-20 00:46:45',NULL),(11,'Marta','Garcia','martu19@gmail.com','$2a$10$n8IlQpaWVF2gfx7XCqx5A.w8p3ZHcKHfrgKbCbEX7NcW/7fzkbdSK','JuanBJusto',1428793545,'avatar-1671497295972.png',2,'2022-12-20 00:48:16','2022-12-20 00:48:16',NULL),(12,'Martin','Marques','marques156@gmail.com','$2a$10$/IFFNFD4jJcJYRKUBf76YeKbYuT0ILbV24G.N5vl9xaEu0pIxtryu','AvCordoba',1124862568,'avatar-1671497355371.jpg',2,'2022-12-20 00:49:15','2022-12-20 00:49:15',NULL),(13,'Pablo','Peralta','peralta@gmail.com','$2a$10$PevMdl.09LdMlQPEOB0FUuh9D5DCLrUW8DyU71WPmGHadTOG3/xGy','Italia',1124583780,'avatar-1671497457087.png',2,'2022-12-20 00:50:57','2022-12-20 00:50:57',NULL),(14,'Rosario','Velez','rovelez@gmail.com','$2a$10$Ev2kTasq0MrGM0QJ2O.ybOW4UQAmv1dlxxoYykbyDR4ZY9gbAWISi','AvBalbin',1524563890,'avatar-1671497505156.png',2,'2022-12-20 00:51:45','2022-12-20 00:51:45',NULL),(15,'Silvina','Filipo','sil256@gmail.com','$2a$10$FK8eg8twAurEYcIsiQchUeds5yM.H49HjLBUYcF5./Q/IKKOXbGpW','Trujuy',1128763890,'avatar-1671497643982.png',2,'2022-12-20 00:54:04','2022-12-20 00:54:04',NULL),(16,'Sofia','Cantilla','sofi@gmail.com','$2a$10$Ny53X7UlCHAXMii/yjVBa.Ft5190AYfeQDS.YsFxNRd8AE4HeadWy','Rosario',1125486736,'avatar-1671497709870.png',2,'2022-12-20 00:55:09','2022-12-20 00:55:09',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 23:13:46

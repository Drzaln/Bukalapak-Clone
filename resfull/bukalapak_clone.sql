-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 13, 2019 at 09:17 AM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bukalapak_clone`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(12) NOT NULL,
  `id_product` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_cart`, `id_product`) VALUES
(25, 8);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(12) NOT NULL,
  `productName` text NOT NULL,
  `prize` int(6) NOT NULL,
  `rating` int(2) NOT NULL,
  `img` text NOT NULL,
  `discount` int(3) NOT NULL,
  `lapakName` varchar(50) NOT NULL,
  `qty` int(3) NOT NULL,
  `lapakImg` text NOT NULL,
  `lapakType` varchar(30) NOT NULL,
  `category` varchar(30) NOT NULL,
  `role` varchar(30) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `productName`, `prize`, `rating`, `img`, `discount`, `lapakName`, `qty`, `lapakImg`, `lapakType`, `category`, `role`, `create_at`) VALUES
(1, 'Sandisk Ultra Dual 16Gb OTG Flash Drive M3.0 - SDD', 136200, 3, 'https://s4.bukalapak.com/img/9890069003/w-300/sandisk_ultra_dual_otg_flash_drive_m30_16gb_sddd3_16g_black_.jpg.webp', 10, 'Buzper', 1, 'https://s3.bukalapak.com/avt/39770042/small/Untitled-1.jpg', '', 'elektronik', 'juragan', '2019-07-12 12:29:06'),
(2, 'CELANA CARGO PDL PANJANG PRIA MOCCA - MOKA', 133000, 3, 'https://s1.bukalapak.com/img/66296748811/w-1000/data.png.webp', 10, 'Green Jeans', 1, 'https://s3.bukalapak.com/avt/88373992/small/iriedaily_slimshotflex_green_jeans_logo_lg.jpg', '', 'Fashion Pria', 'juragan', '2019-07-12 12:29:46'),
(3, 'KAOS POLOS RED SOLID PREMIUM', 37500, 5, 'https://s3.bukalapak.com/img/3655423177/w-1000/KAOS_POLOS_MAGENTA_SOLID_PREMIUM.jpg.webp', 0, 'P CLOTHES STORE', 1, 'https://s2.bukalapak.com/avt/22126541/small/image.jpg', '', 'Fashion Pria', 'Pelapak Premium', '2019-07-13 02:56:47'),
(4, 'CASING / BEZEL SAMSUNG J5', 17000, 4, 'https://s1.bukalapak.com/img/110016509/large/CASING___BEZEL_SAMSUNG_J5.jpg', 40, 'JEFFRY', 1, 'https://s3.bukalapak.com/avt/89267363/small/Screenshot_20190321-234219_1.png', '', 'Elektronik', 'buka mall', '2019-07-13 02:59:18'),
(5, 'Baju Gamis wanita Terbaru Hanumi dress', 3950000, 1, 'https://s1.bukalapak.com/img/69703149401/large/Baju_Gamis_wanita_Terbaru_Hanumi_dress_murah_berkualitas.jpg', 0, 'LOOK BDG', 1, 'https://s0.bukalapak.com/avt/02737502/medium/vector_art_logo_diamond.jpg', '', 'Fashion Wanita', 'juragan', '2019-07-13 03:04:53'),
(6, 'Tupperware', 189900, 5, 'https://s1.bukalapak.com/img/13156758801/large/20052019040514_2_scaled.jpg', 10, 'Tempat Makan97', 1, 'https://www.bukalapak.com/images/default_avatar/small/default.jpg', '', 'Rumah Tangga', 'pelapak premium', '2019-07-13 03:06:24'),
(7, 'Naturgo Masker ', 10000, 5, 'https://s3.bukalapak.com/img/8569331876/w-300/Naturgo_masker_perawatan_wajah_.jpg.webp', 40, 'One Store 25', 1, 'https://s4.bukalapak.com/avt/92699863/small/IMG_20190329_173008_scaled.jpg', '', 'Perawatan dan Kecantikan', 'buka mall', '2019-07-13 03:07:49'),
(8, 'Samsung Galaxy S10 Plus Ram 8gb Rom 128GB', 12900000, 3, 'https://s3.bukalapak.com/img/3276055253/large/Samsung_Galaxy_J5_Pro_.jpg', 10, 'Doni cell', 1, 'https://www.bukalapak.com/images/default_avatar/small/default.jpg', '', 'Elektronik', 'buka mall', '2019-07-13 07:12:50'),
(9, 'Celana Pendek Celana Santai', 168000, 0, 'https://s1.bukalapak.com/img/61018024111/w-1000/Celana_Pendek_Celana_Santai_Celana_Kolor_Jeans_Pinggang_Kare.jpg.webp', 0, 'JoCin Shop', 1, 'https://s4.bukalapak.com/avt/93832583/small/ooo.JPG', '', 'Fashion Pria', 'buka mall', '2019-07-13 07:14:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 13, 2019 at 02:37 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bukalapakclone`
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
(1, 1),
(2, 1),
(3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(12) NOT NULL,
  `productName` varchar(50) NOT NULL,
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
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `productName`, `prize`, `rating`, `img`, `discount`, `lapakName`, `qty`, `lapakImg`, `lapakType`, `category`, `role`, `create_at`) VALUES
(1, 'Sandisk Ultra Dual 16Gb OTG Flash Drive M3.0 - SDD', 136200, 3, 'https://s1.bukalapak.com/img/14994923511/w-1000/nike_combo_AH_Abu_hitam_VL_jaket_pria_babyterry_abu_hitam.png.webp', 10, 'Buzper', 1, 'https://s1.bukalapak.com/img/14994923511/w-1000/nike_combo_AH_Abu_hitam_VL_jaket_pria_babyterry_abu_hitam.png.webp', '', 'Komputer', 'juragan', '2019-07-12 12:29:06'),
(2, 'Sandisk Ultra Dual 16Gb OTG Flash Drive M3.0  SDDD', 136200, 3, 'https://s1.bukalapak.com/img/14994923511/w-1000/nike_combo_AH_Abu_hitam_VL_jaket_pria_babyterry_abu_hitam.png.webp', 10, 'Buzper', 1, 'https://s1.bukalapak.com/img/14994923511/w-1000/nike_combo_AH_Abu_hitam_VL_jaket_pria_babyterry_abu_hitam.png.webp', '', 'Komputer', 'juragan', '2019-07-12 12:29:46');

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
  MODIFY `id_cart` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

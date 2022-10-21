-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 16, 2021 at 02:52 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `role` varchar(20) NOT NULL,
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
CREATE TABLE IF NOT EXISTS `appointment` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `pname` varchar(15) NOT NULL,
  `symptoms` varchar(20) NOT NULL,
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`pName`, `symptoms`) VALUES
('Patient1', 'Body Ache'),
('Patient2', 'Chills');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `age` int(5) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `blood` varchar(4) NOT NULL,
  `dept` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `status` varchar(10) NOT NULL,
  `address` varchar(20) NOT NULL,
  `room` int(11) NOT NULL,
  PRIMARY KEY (`count`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`count`, `date`, `id`, `name`, `age`, `gender`, `blood`, `dept`, `phone`, `email`, `status`, `address`, `room`) VALUES
('1', 'Jeremy', 20, 'Male', 'A-', 'Medecine', '+8801757009622', 'jeremy@gmail.com', 'Single', 'Berlin', 806),
('2', 'Arthur', 32, 'Male', 'A+', 'Dental', '+8801665546776', 'arthur@gmail.com', 'Married', 'Paris', 202),
('3', 'Damon', 34, 'Male', 'AB-', 'Neurology', '+8801734253425', 'damon@gmail.com', 'Divorced', 'NYC', 809),
('4', 'Sammuel', 43, 'Male', 'B+', 'Nutrition', '+8801754323454', 'samm@gmail.com', 'Single', 'Boston', 44),
('5', 'Elsa', 23, 'Female', 'O-', 'Gynaecology', '+8801765432187', 'elsa@gmail.com', 'Single', 'Massachusetts', 909);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
  `id` varchar(20) NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `disease` varchar(20) NOT NULL,
  `room` int(11) NOT NULL,
  PRIMARY KEY (`count`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `fname`,'lname', `dob`, `gender`, `address`, `phone`, `email`, `disease`, `room`) VALUES
('1', 'Dorian', 'Smith', '20-FEB-2001', 'Male', 'Washington', '+81 2725243234'.'dorian@gmail.com', 'Fever', 504),

-- --------------------------------------------------------
--
-- Table structure for table `invoice`
--



DROP TABLE IF EXISTS `invoice`;
CREATE TABLE IF NOT EXISTS `invoice` (
  `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  `admitdate` datetime(6) NOT NULL,
  `releasedate` datetime(6) NOT NULL,
  `patientname` varchar(30) NOT NULL,
  `patientmobile` int(11) NOT NULL,
  `patientaddress` varchar(22) NOT NULL,
  `disease` varchar(22) NOT NULL,
  `roomcharge` int(11) NOT NULL,
  `doctorfee` int(11) NOT NULL,
  `medicinecost` int(11) NOT NULL,
  `othercharge` int(11) NOT NULL
    )

--
-- Dumping data for table `invoice`
--
INSERT INTO `invoice`(`id`, `admitdate`, `releasedate`, `patientname`, `patientmobile`, `patientaddress`, `disease`, `roomcharge`, `doctorfee`, `medicinecost`, `othercharge`) VALUES 
('1','2021-09-13 23:17:03.000000','2021-09-15 23:17:00.000000','Dorian','+8801757009622','Washington','Fever','799','679','1299','399'),
('2','2021-07-15 23:17:00.000000','2021-07-16 23:17:00.000000','Joy','+8801876543237','London','Dengue','759','879','1199','199'),
('3','2021-08-12 23:17:00.000000','2021-08-16 23:17:00.000000','Arslan','+8801889765426','Moscow','Jaundice','589','949','2899','499'),
('4','2021-05-02 23:24:19.000000','2021-06-09 23:24:19.000000','Jonah','+8801765432124','Los Angeles','Malaria','659','889','999','589'),
('5','2022-04-06 23:24:19.000000','2022-04-10 23:17:00.000000','Keith','+8801722456657','Barcelona','Typhoid','489','989','999','4599');

-- --------------------------------------------------------
--
-- Table structure for table `application`
--



DROP TABLE IF EXISTS `application`;
CREATE TABLE IF NOT EXISTS `application` (
  `id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  `name` varchar(30) NOT NULL,
  `qual` varchar(22) NOT NULL,
  `number` varchar(22) NOT NULL,
  `age` int(11) NOT NULL
    )

--
-- Dumping data for table `invoice`
--
INSERT INTO `invoice`(`id`, `name`, `qual`, `number`, `age`) VALUES 
('1','Dorian','Dietician','7998923623','29')

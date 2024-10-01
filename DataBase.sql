CREATE DATABASE register;

USE register;

CREATE TABLE `users` (
    `id` int AUTO_INCREMENT NOT NULL,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `firstname` VARCHAR(50) NOT NULL,
    `secondname` VARCHAR(50) NOT NULL,
    `firstsurname` VARCHAR(50) NOT NULL,
    `secondsurname` VARCHAR(50) NOT NULL,
    `documentNumber` VARCHAR(20) NOT NULL UNIQUE,
    `documentType` VARCHAR(10) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT DATOS


INSERT INTO `users` (`username`, `firstname`, `secondname`, `firstsurname`, `secondsurname`, `documentNumber`, `documentType`, `email`, `password`)
VALUES ('El duque', 'Juan', 'Pedro', 'De', 'Duque', '1010101010', 'CC', 'v@gmail.com', 'ElDuque@12pro-');

INSERT INTO `users` (`username`, `firstname`, `secondname`, `firstsurname`, `secondsurname`, `documentNumber`, `documentType`, `email`, `password`)
VALUES ('TACO', 'Juan', 'Pedro', 'De', 'Duque', '1010101001', 'CC', 'v1@gmail.com', 'ElDuque@12pro-');

DROP TABLE users;

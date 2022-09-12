CREATE DATABASE akan;
USE akan;

CREATE TABLE usuario(
id_client INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(50) UNIQUE NOT NULL, -- FK
nombre_usuario VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
direccion VARCHAR(250) NOT NULL,
telefono VARCHAR(15) NOT NULL);

INSERT INTO usuario(email, nombre_usuario, apellido, direccion, telefono)
VALUES ('arturo123@gmail.com', 'Arturo', 'Lopez', 'calle a numero b C.P 56000', '5519497165'),
('oscar456@gmail.com', 'Oscar', 'Avila', 'calle c numero d C.P 56001', '7222478012'),
('pilar789@gmail.com', 'Pilar', 'Ramirez', 'calle e numero f C.P 56002', '5585768481'),
('olivia101112@gmail.com', 'Olivia', 'Garcia', 'calle g numero h C.P 56003', '5526731874'),
('nek131415@gmail.com', 'Nek', 'Hernanez', 'calle i numero j C.P 56004', '5591459117'),
('eduardo161718@gmail.com', 'Eduardo', 'Hernandez', 'calle k numero l C.P 56005', '5577345244'),
('martha192021@gmail.com', 'Martha', 'Sotelo', 'calle m numero n C.P 56006', '5565261032'),
('jorge2223@gmail.com', 'Jorge', 'Alonso', 'calle o numero p C.P 56007', '5578110418');
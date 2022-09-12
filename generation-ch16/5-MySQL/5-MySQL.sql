CREATE DATABASE tienda;
USE tienda;
CREATE TABLE clientes (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES('Pedro', 'Páramo', '5578114018', 'Comala'),
('Raúl', 'Sanchez', '5578114018', 'Comala'),
('Victor', 'Fernandez', '5578114018', 'Comala');
SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id = 13;







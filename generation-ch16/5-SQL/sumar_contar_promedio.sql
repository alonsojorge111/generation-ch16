USE sakila;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT() Cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de ventas que tuvo el trabajador 2

SELECT COUNT(*) FROM payment WHERE staff_id = 2;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

-- SUMA()

SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id=2;

-- ¿Cual cliente realizó mas rentas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- ORDER BY: ORDENA LA COLUMNA EN FUNCION A LO QUE LE INIDIQUEMOS ASC O DESC
-- GROUP BY: AGRUPA PERO OMITE LOS VALORES REPETIDOS 
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id; 

-- ¿Que cliente gasta menos? 248//50.85
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total ASC;

-- ¿Que cliente gasta mas? 525 // 221.55
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;

-- AVG() REGRESA EL PROMEDIO
SELECT AVG(amount) AS Promedio FROM payment;

-- ¿CUAL CLIENTE GASTO MAS EN PROMEDIO?

SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;




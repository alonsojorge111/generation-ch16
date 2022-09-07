USE world;

SELECT * FROM country;
SELECT Name, Population FROM country;
SELECT Name, Population FROM country ORDER BY Population DESC;
SELECT Name, Population FROM country WHERE Name = 'Mexico';
SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5+5;

SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais;

SELECT DISTINCT Continent FROM country;
-- WHERE cláusula
-- <> <= >= != =
SELECT * FROM country WHERE LifeExpectancy  < 50 ORDER BY LifeExpectancy DESC;

-- Between
-- Se utilizar junto con WHERE

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000;

-- OR / AND != --- logicos

SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';

-- Operador IN

SELECT * FROM country WHERE Continent IN ('Asia', 'NortH America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'NortH America') ORDER BY Continent;

-- LIKE sirve para buscar un patrón en especifico

-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un caracter

SELECT Name FROM country WHERE Name LIKE '%and%';
SELECT Name FROM country WHERE Name LIKE '%e__a';
SELECT * FROM country WHERE Continent LIKE 'asia';










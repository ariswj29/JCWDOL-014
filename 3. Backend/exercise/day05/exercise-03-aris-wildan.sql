-- No. 1
USE sakila;
SELECT first_name, last_name FROM actor;

-- No. 2
SELECT * FROM actor WHERE first_name LIKE '%JOE%';

-- No. 3
SELECT address, district, city_id FROM address WHERE district = "California" OR district = "Alberta" OR district = "Mekka";

-- No. 4
SELECT COUNT(*) FROM actor WHERE last_name = "WOOD";

-- No. 5
SELECT customer_id, SUM(amount) as total_amount, count(customer_id) as total_payment FROM payment GROUP BY customer_id HAVING COUNT(customer_id) > 20;
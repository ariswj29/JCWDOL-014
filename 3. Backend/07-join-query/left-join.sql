USE sql_store;

SELECT c.customer_id, c.first_name, order_id
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
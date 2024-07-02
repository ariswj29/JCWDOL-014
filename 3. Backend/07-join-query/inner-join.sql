USE sql_store;

SELECT * FROM customers c JOIN orders o WHERE c.customer_id = o.customer_id ORDER BY c.customer_id;
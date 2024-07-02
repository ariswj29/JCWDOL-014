USE sql_store;

SELECT * FROM orders o 
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_statuses os ON o.status = os.status_order_id
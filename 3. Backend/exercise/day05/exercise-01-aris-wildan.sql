-- No. 1
CREATE DATABASE purwadhika_student;
CREATE DATABASE purwadhika_schedule;
CREATE DATABASE purwadhika_branch;

-- No. 2 
SHOW DATABASES LIKE '%purwadhika%';

-- No. 3
DROP DATABASE purwadhika_schedule;

-- No. 4
USE purwadhika_student;
CREATE TABLE Students (
    id INT,
    last_name VARCHAR(255),
    first_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255)
);

-- No. 5
ALTER TABLE Students ADD email VARCHAR(255);

-- No. 6
ALTER TABLE Students 
ADD gender ENUM('Male', 'Female'),
ADD batch_code VARCHAR(255), 
ADD phone_number VARCHAR(14), 
ADD alternative_phone_number VARCHAR(14);

-- No. 7
ALTER TABLE Students CHANGE alternative_phone_number description VARCHAR(255);

-- No. 8
ALTER TABLE Students DROP COLUMN gender;
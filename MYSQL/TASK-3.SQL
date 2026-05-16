CREATE database TASK;
USE TASK;
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    name VARCHAR(100) NOT NULL,
    
    email VARCHAR(150) UNIQUE NOT NULL,
    
    department VARCHAR(100) NOT NULL,
    
    salary DECIMAL(10,2) NOT NULL CHECK (salary > 0)
);
INSERT INTO employees (name, email, department, salary)
VALUES
('Arun', 'arun@gmail.com', 'HR', 30000),
('Kavin', 'kavin@gmail.com', 'Finance', 42000),
('Meena', 'meena@gmail.com', 'IT', 55000),
('Divya', 'divya@gmail.com', 'Marketing', 38000),
('Rahul', 'rahul@gmail.com', 'Sales', 47000);

SELECT COUNT(*) AS total_employees
FROM employees;
SELECT SUM(salary) AS total_salary
FROM employees;
SELECT AVG(salary) AS average_salary
FROM employees;
SELECT MAX(salary) AS highest_salary
FROM employees;
SELECT MIN(salary) AS minimum_salary
FROM employees;



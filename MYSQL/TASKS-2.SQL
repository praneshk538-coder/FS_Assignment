CREATE DATABASE DB;
USE DB;
CREATE TABLE EMPOLYEES(

E_ID INT PRIMARY KEY auto_increment,
E_NAME VARCHAR(20) NOT NULL,
E_EMAIL VARCHAR(20) UNIQUE,
E_DEPT VARCHAR(20) NOT NULL,
E_SALARY int

);

INSERT INTO EMPOLYEES (E_NAME, E_EMAIL,E_DEPT,E_SALARY)
VALUES
('Arun', 'arun@gmail.com', 'HR', 30000),
('Kavin', 'kavin@gmail.com', 'Finance', 42000),
('Meena', 'meena@gmail.com', 'IT', 55000),
('Divya', 'divya@gmail.com', 'Marketing', 38000),
('Rahul', 'rahul@gmail.com', 'Sales', 47000);
DESC EMPOLYEES;


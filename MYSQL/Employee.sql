CREATE DATABASE COMPANY;
USE COMPANY;

CREATE TABLE EMPLOYEES(
    Emp_id INT PRIMARY KEY auto_increment,
    Emp_Name VARCHAR(20),
    Emp_Email VARCHAR(50),
    Emp_Dept VARCHAR(20),
    Emp_Salary float,
    City VARCHAR(20),
    Create_At DATETIME
);

INSERT INTO EMPLOYEES
(Emp_id, Emp_Name, Emp_Email, Emp_Dept, Emp_Salary, City, Create_At)
VALUES
(1, 'LEON', 'LEONBAS79@GMAIL.COM', 'CSE', 79999, 'CHENNAI', NOW()),
(2, 'PRANESH', 'PRANESH@GMAIL.COM', 'IT', 99999, 'USA', NOW());

SELECT * FROM EMPLOYEES;

SELECT UPPER(Emp_Name) AS Name_Upper,LOWER(Emp_Email) AS Email_Lower,ROUND(Emp_Salary) AS Rounded_Salary
FROM EMPLOYEES;
select sum(Emp_Salary) from EMPLOYEES;
select max(Emp_Salary) from EMPLOYEES;

SELECT * FROM EMPLOYEES WHERE Emp_Name = 'LEON';

DELETE FROM EMPLOYEES WHERE UPPER(Emp_Name) = 'LEON';


DELETE FROM EMPLOYEES;

TRUNCATE TABLE EMPLOYEES;
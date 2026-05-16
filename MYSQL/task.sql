create database college_db;
use college_db;
create table  students(
 e_id int primary key auto_increment,
 e_name varchar(20),
 e_age int not null,
 e_course varchar(20) unique
 



);
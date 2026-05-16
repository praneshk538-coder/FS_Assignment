
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE movies (
    movie_id INT PRIMARY KEY,
    movie_name VARCHAR(100),
    hero_name VARCHAR(100),
    heroine_name VARCHAR(100),
    director_name VARCHAR(100),
    release_year INT,
    rating DECIMAL(2,1)
);
INSERT INTO movies VALUES
(1, 'Leo', 'Vijay', 'Trisha', 'Lokesh Kanagaraj', 2023, 8.2),
(2, 'Jailer', 'Rajinikanth', 'Tamannaah', 'Nelson', 2023, 8.5),
(3, 'Master', 'Vijay', 'Malavika Mohanan', 'Lokesh Kanagaraj', 2021, 8.0),
(4, 'KGF 2', 'Yash', 'Srinidhi Shetty', 'Prashanth Neel', 2022, 8.7),
(5, 'RRR', 'NTR', 'Alia Bhatt', 'S. S. Rajamouli', 2022, 9.0);

SELECT * FROM movies;

SELECT movie_name, hero_name FROM movies;


SELECT * FROM movies
WHERE release_year > 2022;

SELECT * FROM movies
WHERE rating > 8.5;


SELECT * FROM movies
WHERE director_name = 'Lokesh Kanagaraj';

SELECT * FROM movies
ORDER BY rating DESC;


UPDATE movies
SET rating = 8.9
WHERE movie_id = 1;

DELETE FROM movies
WHERE movie_id = 3;
create database task4;
use task4;
CREATE TABLE election_results (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_name VARCHAR(100) NOT NULL,
    party_name VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    constituency VARCHAR(100) NOT NULL,
    total_votes INT NOT NULL,
    election_year YEAR NOT NULL
);
SELECT * FROM election_results;
SELECT candidate_name, party_name
FROM election_results;
SELECT *
FROM election_results
WHERE total_votes > 70000;
SELECT *
FROM election_results
WHERE party_name = 'DMK';
SELECT *
FROM election_results
WHERE district = 'Madurai'
AND total_votes > 60000;
SELECT *
FROM election_results
ORDER BY total_votes ASC;
SELECT *
FROM election_results
ORDER BY total_votes DESC;
SELECT DISTINCT district
FROM election_results
ORDER BY district ASC;
SELECT COUNT(*) AS total_candidates
FROM election_results;
SELECT party_name, SUM(total_votes) AS total_party_votes
FROM election_results
GROUP BY party_name;
SELECT district, AVG(total_votes) AS average_votes
FROM election_results
GROUP BY district;
SELECT district, MAX(total_votes) AS highest_votes
FROM election_results
GROUP BY district;
SELECT district, AVG(total_votes) AS average_votes
FROM election_results
GROUP BY district
HAVING AVG(total_votes) > 60000;
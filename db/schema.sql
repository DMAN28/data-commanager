DROP TABLE IF EXISTS driver;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS team;

CREATE TABLE team (
id INT NOT NULL AUTO_INCREMENT,
team VARCHAR(30) NOT NULL 
PRIMARY KEY (id)
);
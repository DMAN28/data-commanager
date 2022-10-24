INSERT INTO team (name)
VALUES
('Mercedes AMG Petronas'),
('Red Bull Racing'),
('McLaren'),
('Alpine'),
('Alfa Romeo'),
('Aston Martin'),
('AlphaTauri'),
('Haas'),
('Williams Racing'),
('Scuderia Ferrari');


INSERT INTO car (version, engine,team_id)
VALUES
('Mercedes-AMG F1 W13 E','Mercedes',1),
('Red Bull Racing RB18','Red Bull',2),
('McLaren MCL36','Mercedes',5),
('Alpine A522','Renault',4),
('Alfa Romeo C42','Ferrari',6),
('Aston Martin AMR22','Mercedes',7),
('AlphaTauri AT03','Red Bull',9),
('Haas VF-22','Ferrari',8),
('Williams FW44','Mercedes',10),
('Ferrari F1-75','Ferrari',3),


INSERT INTO driver (first_name, last_name, engine,team_id)
VALUES
('Lewis', 'Hamilton',1, NULL),
('George', 'Russel',1, NULL),
('Max', 'Verstappen',2, NULL),
('Sergio', 'Perez',2, NULL),
('Charles', 'Leclerc',3, NULL),
('Carlos', 'Sainz',3, NULL),
('Lando', 'Norris',5, NULL),
('Daniel', 'Riccaiardo',5, NULL),
('Esteban', 'Ocon',4, NULL),
('Fernando', 'Alonso',4, NULL),
('Valtteri', 'Bottas',6, NULL),
('Zhou', 'Guanyu',6, NULL),
('Sebastian', 'Vettel',7, NULL),
('Lance', 'Stroll',7, NULL),
('Yuki', 'Tsunoda',9, NULL),
('Pierre', 'Gasly',9, NULL),
('Kevin', 'Magnussen',8, NULL),
('Mick', 'Schumacher',8, NULL),
('Nicholas', 'Latifi',10, NULL),
('Alexander', 'Albon',10, NULL),

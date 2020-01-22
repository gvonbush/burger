USE burgers_db;
SELECT * FROM burgers;
INSERT into burgers (burger_name) value ("Baconburger");
UPDATE burgers SET devoured = true where id = 1;
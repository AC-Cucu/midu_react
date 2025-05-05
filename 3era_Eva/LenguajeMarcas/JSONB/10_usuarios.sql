/*
    1.      Creación e insert de la tabla y los registros.
    2.      Select de usuarios con el nombre y su tema.
    3.      Buscar usuarios que tengan activadas las notificaciones.
    4.      Actualizar el tema de un usuario a "oscuro".
    5.      Añadir un nuevo campo 'newsletter' a todos los usuarios con valor false.
*/
-- 1.      Creación de la tabla
CREATE TABLE Usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	preferencias JSONB NULL
);


-- 1.      Insert de los registros.
INSERT INTO Usuarios (nombre, preferencias)
VALUES (
	'Ana'
	, '
        {
            "idioma": "es",
            "tema": "oscuro",
            "notificaciones": true
        }	
	'
);

INSERT INTO Usuarios (nombre, preferencias)
VALUES (
	'John'
	, '
        {
            "idioma": "en",
            "tema": "oscuro",
            "notificaciones": false
        }	
	'
);

INSERT INTO Usuarios (nombre, preferencias)
VALUES (
	'Marrie'
	, '
        {
            "idioma": "fr",
            "tema": "blanco",
            "notificaciones": false
        }	
	'
);


-- 2. Select de usuarios con el nombre y su tema.
select nombre, preferencias ->> 'tema' as tema
from usuarios;


--3.      Buscar usuarios que tengan activadas las notificaciones.
select nombre, preferencias ->> 'tema' as tema
from usuarios
where preferencias ->> 'notificaciones' = 'true'
;


--4.      Actualizar el tema de un usuario a "oscuro".
UPDATE usuarios
SET 
	preferencias = jsonb_set(preferencias, '{tema}', '"claro"')
WHERE preferencias ->> 'notificaciones' = 'true'
;


--5.     Añadir un nuevo campo 'newsletter' a todos los usuarios con valor false.
UPDATE usuarios
SET preferencias = jsonb_set(preferencias, '{newsletter}', 'false')
;
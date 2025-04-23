--Creación tabla productos con un tipo de campo jsonb
CREATE TABLE Productos (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	caracteristicas JSONB NULL
);
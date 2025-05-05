-- Seleccionamos el nombre, el valor de las claves 'marca' y 'color' (pertenecientes a caracteristicas)
-- que tengan el valor 'Levis' en su clave 'marca' dentro del campo JSONB caracteristicas.
SELECT nombre, caracteristicas ->> 'marca' as marca, caracteristicas ->> 'color' as color
FROM public.productos
WHERE caracteristicas ->> 'marca' = 'Levis'
;
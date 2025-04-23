-- Select que muestra los atributos 'marca' y 'cantidad' del campo jsonb 'caracteristicas' mediante el operador '->>'
SELECT caracteristicas ->> 'marca' Marca
, caracteristicas ->> 'cantidad' Cantidad
FROM productos
;
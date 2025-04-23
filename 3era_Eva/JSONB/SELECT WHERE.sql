-- Select que filtra los registros accediendo a los atributos del campo jsonb 'caracteristicas' mediante el operador '->>'
SELECT id
, nombre
, caracteristicas
FROM productos
WHERE caracteristicas ->> 'color' = 'Gris'
;
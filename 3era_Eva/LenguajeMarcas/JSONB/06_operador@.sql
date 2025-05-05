-- Alternativa al operador "->>" pero solo se puede utilizar en el where
SELECT nombre, caracteristicas ->> 'marca' as marca, caracteristicas ->> 'color' as color
FROM public.productos
--WHERE caracteristicas ->> 'marca' = 'Levis'
WHERE caracteristicas @> '{"marca": "Levis"}'
;
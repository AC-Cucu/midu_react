-- Recuperar todas las claves de un campo JSONB mediante la función jsonb_object_keys
SELECT DISTINCT jsonb_object_keys(caracteristicas)
FROM public.productos
;

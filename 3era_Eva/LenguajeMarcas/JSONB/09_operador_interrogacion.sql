/*
	Filtrar todos los registros por solo los que 
    tengan una clave en concreto dentro del campo jsonb
*/
select * from productos 
where caracteristicas ? 'stock'
;
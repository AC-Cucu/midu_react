/*
	Actualizar todos los productos que tengan como valor 'Beige' de la clave 'color' 
    para que el valor de su clave 'cantidad' sea igual a 5
*/

UPDATE productos
SET caracteristicas = jsonb_set(caracteristicas,'{cantidad}','5')
WHERE caracteristicas @> '{"color": "Beige"}'
;


/*
	Actualizar todos los productos que tengan como valor 'Beige' de la clave 'color' 
    para añadir una nueva clave solo a ese registro
*/

UPDATE productos
SET caracteristicas = jsonb_set(caracteristicas,'{stock}','10')
WHERE caracteristicas @> '{"color": "Beige"}'
;

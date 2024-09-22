INSERT INTO public.grupo_clientes
(grupo_cliente_id, nombre, porcentaje_descuento)
VALUES('82c3c476-f8a7-4b85-bb24-c4f33e3e14d1'::uuid, 'Administradores', 25.0);

INSERT INTO public.clientes
(cliente_id, codigo, nombre, grupo_cliente_id)
VALUES('7ffee2f5-add4-48ea-8fd2-b42b071ecba5'::uuid, '1234A', 'Alex', '82c3c476-f8a7-4b85-bb24-c4f33e3e14d1'::uuid);

INSERT INTO public.productos
(producto_id, codigo, nombre, tipo)
VALUES('f81cd47e-0a84-4b8c-a69c-c884f356f589'::uuid, '4554A', 'Coca Cola', 'Producto'::public."productos_tipo_enum");
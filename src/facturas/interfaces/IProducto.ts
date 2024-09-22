export interface IProducto {
    producto_id: string;
    codigo: string;
    nombre: string;
    tipo: ITipoProducto;
}

export interface IPartialProducto {
    codigo: string;
    nombre: string;
    tipo: ITipoProducto;
}

export enum ITipoProducto {
    Producto = 'Producto',
    Servicio = 'Servicio',
}
export interface IProducto {
    codigo: string;
    nombre: string;
    tipo: ITipoProducto;
}

export enum ITipoProducto {
    Producto = 'Producto',
    Servicio = 'Servicio',
}
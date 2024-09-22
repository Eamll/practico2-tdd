export interface IFactura {
    factura_id: string;
    cliente_id: string;
    productos: IProductosFactura[];
    almacen: string;
    condicion_pago: string;
    forma_entrega: string;
    descuento: number;
    impuesto: number;
    total: number;
}

export interface ICreateFactura {
    cliente_id: string;
    productos: IProductosFactura[];
    almacen: string;
    condicion_pago: string;
    forma_entrega: string;
    descuento: number;
    impuesto: number;
    total: number;
}

export interface IProductosFactura {
    producto_id: string;
    cantidad: number;
    precio: number;
    descuento: number;
}

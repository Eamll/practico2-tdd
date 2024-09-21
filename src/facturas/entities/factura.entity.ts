import { ICliente } from "./cliente.entity";
import { IDescuentos } from "./descuentos.entity";
import { IProducto } from "./producto.entity";

export interface IFactura {
    cliente: ICliente;
    productos: IProducto[];
    almacen: string;
    condicionPago: string;
    formaEntrega: string;
    descuentos: IDescuentos;
    total: number; // Calculado después de aplicar descuentos
}
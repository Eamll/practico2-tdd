import { ICliente } from "./ICliente";
import { IDescuentos } from "./IDescuentos";
import { IProducto } from "./IProducto";

export interface IFactura {
    cliente: ICliente;
    productos: IProducto[];
    almacen: string;
    condicionPago: string;
    formaEntrega: string;
    descuentos: IDescuentos;
    total: number; // Calculado después de aplicar descuentos
}
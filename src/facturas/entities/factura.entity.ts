import { Cliente } from "./cliente.entity";
import { Descuentos } from "./descuentos.entity";
import { Producto } from "./producto.entity";

export class Factura {
    cliente: Cliente;
    productos: Producto[];
    almacen: string;
    condicionPago: string;
    formaEntrega: string;
    descuentos: Descuentos;
    total: number; // Calculado después de aplicar descuentos
}
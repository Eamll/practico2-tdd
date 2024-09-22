import { IsNumber, IsString, IsUUID } from "class-validator";
import { ICliente } from "../interfaces/ICliente";
import { IDescuentos } from "../interfaces/IDescuentos";
import { IFactura } from "../interfaces/IFactura";
import { IProducto } from "../interfaces/IProducto";
import { Cliente } from "../typeorm-entities/cliente.entity";
import { Type } from "class-transformer";
import { Producto } from "../typeorm-entities/producto.entity";
import { Descuentos } from "../typeorm-entities/descuentos.entity";

export class CreateFacturaDto implements IFactura {
    @IsUUID()
    factura_id: string;

    @Type(() => Cliente)
    cliente: ICliente;

    @Type(() => Producto)
    productos: IProducto[];

    @IsString()
    almacen: string;

    @IsString()
    condicionPago: string;

    @IsString()
    formaEntrega: string;

    @Type(() => Descuentos)
    descuentos: IDescuentos;

    @IsNumber()
    total: number;
}

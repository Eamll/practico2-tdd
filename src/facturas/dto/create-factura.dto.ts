import { IsArray, IsNumber, IsString, IsUUID } from "class-validator";
import { ICliente } from "../interfaces/ICliente";
import { IDescuentos } from "../interfaces/IDescuentos";
import { ICreateFactura, IFactura, IProductosFactura } from "../interfaces/IFactura";
import { IProducto } from "../interfaces/IProducto";
import { Cliente } from "../typeorm-entities/cliente.entity";
import { Type } from "class-transformer";
import { Producto } from "../typeorm-entities/producto.entity";
import { Descuentos } from "../typeorm-entities/descuentos.entity";

export class CreateFacturaDto implements ICreateFactura {
    @IsUUID()
    cliente_id: string;

    @IsArray()
    productos: IProductosFactura[];

    @IsString()
    almacen: string;

    @IsString()
    condicion_pago: string;

    @IsString()
    forma_entrega: string;

    @IsNumber()
    descuento: number;

    @IsNumber()
    impuesto: number;

    @IsNumber()
    total: number;
}

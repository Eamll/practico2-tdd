import { IsArray, IsNumber, IsString, IsUUID } from "class-validator";

import { ICreateFactura, IProductosFactura } from "../interfaces/IFactura";
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

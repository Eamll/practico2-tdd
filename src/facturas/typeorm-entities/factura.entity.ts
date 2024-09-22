import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IFactura, IProductosFactura } from "../interfaces/IFactura";

@Entity("facturas")
export class Factura implements IFactura {
    @PrimaryGeneratedColumn('uuid')
    factura_id: string;

    @Column("uuid")
    cliente_id: string;

    @Column("jsonb", { default: [] })
    productos: IProductosFactura[];

    @Column("text")
    almacen: string;

    @Column("text")
    condicion_pago: string;

    @Column("text")
    forma_entrega: string;

    @Column("float", { default: 0 })
    descuento: number;

    @Column("float", { default: 0 })
    impuesto: number;

    @Column("float", { default: 0 })
    total: number;

}
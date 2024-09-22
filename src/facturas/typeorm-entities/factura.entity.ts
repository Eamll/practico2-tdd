import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, Column, OneToOne, JoinColumn } from "typeorm";
import { IFactura } from "../interfaces/IFactura";
import { Cliente } from "./cliente.entity";
import { Producto } from "./producto.entity";
import { IDescuentos } from "../interfaces/IDescuentos";
import { Descuentos } from "./descuentos.entity";

@Entity()
export class Factura implements IFactura {
    @PrimaryGeneratedColumn('uuid')
    factura_id: string;

    @ManyToOne(() => Cliente, { eager: true })
    cliente: Cliente;

    @ManyToMany(() => Producto, { eager: true })
    @JoinTable()
    productos: Producto[];

    @Column()
    almacen: string;

    @Column()
    condicionPago: string;

    @Column()
    formaEntrega: string;

    @OneToOne(() => Descuentos, { eager: true, cascade: true })
    @JoinColumn()
    descuentos: IDescuentos;

    @Column('float')
    total: number;
}
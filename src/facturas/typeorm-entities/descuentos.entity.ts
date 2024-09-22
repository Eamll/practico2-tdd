import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IDescuentos } from "../interfaces/IDescuentos";

@Entity("descuentos")
export class Descuentos implements IDescuentos {
    @PrimaryGeneratedColumn('uuid')
    descuentos_id: string;

    @Column('float', { default: 0 })
    nivelItem: number;

    @Column('float', { default: 0 })
    nivelGlobal: number;

    @Column("uuid")
    grupo_cliente_id: string;
}
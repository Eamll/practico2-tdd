import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IGrupoCliente } from '../interfaces/IGrupoCliente';

@Entity("grupo_clientes")
export class GrupoCliente implements IGrupoCliente {
    @PrimaryGeneratedColumn('uuid')
    grupo_cliente_id: string;

    @Column('text')
    nombre: string;

    @Column('float', { default: 0 })
    porcentaje_descuento: number;
}

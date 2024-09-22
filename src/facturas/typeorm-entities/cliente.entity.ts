import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ICliente } from '../interfaces/ICliente';
import { GrupoCliente } from './grupo-cliente.entity';

@Entity("clientes")
export class Cliente implements ICliente {
    @PrimaryGeneratedColumn('uuid')
    cliente_id: string;

    @Column("text")
    codigo: string;

    @Column("text")
    nombre: string;

    @Column("uuid")
    grupo_cliente_id: string;
}
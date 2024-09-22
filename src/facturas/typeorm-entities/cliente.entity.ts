import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ICliente } from '../interfaces/ICliente';
import { GrupoCliente } from './grupo-cliente.entity';

@Entity()
export class Cliente implements ICliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    nombre: string;

    @ManyToOne(() => GrupoCliente, grupoCliente => grupoCliente.clientes, { eager: true })
    grupo: GrupoCliente;
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';
import { IGrupoCliente } from '../interfaces/IGrupoCliente';

@Entity()
export class GrupoCliente implements IGrupoCliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('float', { default: 0 })
    porcentajeDescuento: number;

    @OneToMany(() => Cliente, cliente => cliente.grupo)
    clientes: Cliente[];
}

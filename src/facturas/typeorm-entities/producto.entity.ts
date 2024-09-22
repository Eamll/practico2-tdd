import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IProducto, ITipoProducto } from "../interfaces/IProducto";

@Entity()
export class Producto implements IProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @Column()
    nombre: string;

    @Column({
        type: 'enum',
        enum: ITipoProducto,
    })
    tipo: ITipoProducto;
}



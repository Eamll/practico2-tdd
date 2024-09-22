import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IProducto, ITipoProducto } from "../interfaces/IProducto";

@Entity("productos")
export class Producto implements IProducto {
    @PrimaryGeneratedColumn('uuid')
    producto_id: string;

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



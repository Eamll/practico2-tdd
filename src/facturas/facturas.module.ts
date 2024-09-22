import { Module } from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { FacturasController } from './facturas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './typeorm-entities/factura.entity';
import { Cliente } from './typeorm-entities/cliente.entity';
import { Producto } from './typeorm-entities/producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Factura, Cliente, Producto])],
    controllers: [FacturasController],
    providers: [FacturasService],
})
export class FacturasModule { }

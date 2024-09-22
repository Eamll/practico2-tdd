import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './typeorm-entities/factura.entity';
import { Cliente } from './typeorm-entities/cliente.entity';
import { Producto } from './typeorm-entities/producto.entity';
import { GrupoCliente } from './typeorm-entities/grupo-cliente.entity';

@Injectable()
export class FacturasService {
    constructor(
        @InjectRepository(Factura)
        private facturasRepository: Repository<Factura>,
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
        @InjectRepository(GrupoCliente)
        private grupoClientesRepository: Repository<GrupoCliente>,
        @InjectRepository(Producto)
        private productosRepository: Repository<Producto>,

    ) { }

    async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
        const { productos } = createFacturaDto;

        const cliente = await this.clientesRepository.findOne(
            { where: { cliente_id: createFacturaDto.cliente_id } },
        );

        const grupoCliente = await this.grupoClientesRepository.findOne(
            { where: { grupo_cliente_id: cliente.grupo_cliente_id } },
        );




        const factura = this.facturasRepository.create(createFacturaDto);
        return await this.facturasRepository.save(factura);
    }

    async findAll(): Promise<Factura[]> {
        return await this.facturasRepository.find();
    }

    async findOne(id: string): Promise<Factura> {
        return await this.facturasRepository.findOne({ where: { factura_id: id } });
    }

    async update(id: string, updateFacturaDto: UpdateFacturaDto): Promise<Factura> {
        await this.facturasRepository.update(id, updateFacturaDto);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.facturasRepository.delete(id);
    }
}
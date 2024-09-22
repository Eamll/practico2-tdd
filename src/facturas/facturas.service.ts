import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './typeorm-entities/factura.entity';

@Injectable()
export class FacturasService {
    constructor(
        @InjectRepository(Factura)
        private facturasRepository: Repository<Factura>,
    ) { }

    async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
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
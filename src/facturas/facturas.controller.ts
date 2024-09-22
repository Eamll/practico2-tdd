import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { FacturasService } from './facturas.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Controller('facturas')
export class FacturasController {
    constructor(private readonly facturasService: FacturasService) { }

    @Post()
    create(@Body() createFacturaDto: CreateFacturaDto) {
        return this.facturasService.create(createFacturaDto);
    }

    @Get()
    findAll() {
        return this.facturasService.findAll();
    }

    @Get(':factura_id')
    findOne(@Param('factura_id') factura_id: string) {
        return this.facturasService.findOne(factura_id);
    }

    @Patch(':factura_id')
    update(
        @Param('factura_id') factura_id: string,
        @Body() updateFacturaDto: UpdateFacturaDto,
    ) {
        return this.facturasService.update(factura_id, updateFacturaDto);
    }

    @Delete(':factura_id')
    remove(@Param('factura_id') factura_id: string) {
        return this.facturasService.remove(factura_id);
    }
}

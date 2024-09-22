import { Test, TestingModule } from '@nestjs/testing';
import { FacturasService } from './facturas.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Factura } from './typeorm-entities/factura.entity';
import { Cliente } from './typeorm-entities/cliente.entity';
import { Producto } from './typeorm-entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { GrupoCliente } from './typeorm-entities/grupo-cliente.entity';

describe('FacturasService', () => {
    let service: FacturasService;
    let facturasRepository: Repository<Factura>;
    let clientesRepository: Repository<Cliente>;
    let productosRepository: Repository<Producto>;
    let grupoClientesRepository: Repository<GrupoCliente>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FacturasService,
                {
                    provide: getRepositoryToken(Factura),
                    useValue: {
                        create: jest.fn(),
                        save: jest.fn(),
                    },
                },
                {
                    provide: getRepositoryToken(Cliente),
                    useValue: {
                        findOne: jest.fn(),
                    },
                },
                {
                    provide: getRepositoryToken(Producto),
                    useValue: {
                        findOne: jest.fn(),
                    },
                },
                {
                    provide: getRepositoryToken(GrupoCliente),
                    useValue: { findOne: jest.fn() },
                }
            ],
        }).compile();

        service = module.get<FacturasService>(FacturasService);
        facturasRepository = module.get<Repository<Factura>>(getRepositoryToken(Factura));
        clientesRepository = module.get<Repository<Cliente>>(getRepositoryToken(Cliente));
        productosRepository = module.get<Repository<Producto>>(getRepositoryToken(Producto));
        grupoClientesRepository = module.get<Repository<GrupoCliente>>(getRepositoryToken(GrupoCliente));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create a new factura', async () => {
            const createFacturaDto: CreateFacturaDto = {
                cliente_id: '1',
                productos: [],
                almacen: '',
                condicion_pago: '',
                forma_entrega: '',
                descuento: 0,
                impuesto: 0,
                total: 0
            };

            const mockCliente: Cliente = {
                cliente_id: '1',
                grupo_cliente_id: '1',
                codigo: '',
                nombre: ''
            };
            const mockGrupoCliente: GrupoCliente = {
                grupo_cliente_id: '1',
                nombre: '',
                porcentaje_descuento: 0
            };
            const mockFactura = { factura_id: '1', ...createFacturaDto };

            jest.spyOn(clientesRepository, 'findOne').mockResolvedValueOnce(mockCliente);
            jest.spyOn(grupoClientesRepository, 'findOne').mockResolvedValueOnce(mockGrupoCliente);
            jest.spyOn(facturasRepository, 'create').mockReturnValue(mockFactura);
            jest.spyOn(facturasRepository, 'save').mockResolvedValue(mockFactura);

            const result = await service.create(createFacturaDto);

            // expect(clientesRepository.findOne).toHaveBeenCalledTimes(2);
            expect(clientesRepository.findOne).toHaveBeenCalledWith({ where: { cliente_id: '1' } });
            expect(grupoClientesRepository.findOne).toHaveBeenCalledTimes(1);
            expect(facturasRepository.create).toHaveBeenCalledWith(createFacturaDto);
            expect(facturasRepository.save).toHaveBeenCalledWith(mockFactura);
            expect(result).toEqual(mockFactura);
        });
    });
});
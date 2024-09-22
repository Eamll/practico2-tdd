import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FacturasService } from './facturas.service';
import { Factura } from './typeorm-entities/factura.entity';
import { Repository } from 'typeorm';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Cliente } from './typeorm-entities/cliente.entity';

const mockFacturaRepository = () => ({
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
});

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('FacturasService', () => {
    let service: FacturasService;
    let repository: MockRepository<Factura>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FacturasService,
                {
                    provide: getRepositoryToken(Factura),
                    useValue: mockFacturaRepository(),
                },
            ],
        }).compile();

        service = module.get<FacturasService>(FacturasService);
        repository = module.get<MockRepository<Factura>>(getRepositoryToken(Factura));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create a new factura', async () => {
            const createFacturaDto: CreateFacturaDto = {
                factura_id: '',
                cliente: undefined,
                productos: [],
                almacen: '',
                condicionPago: '',
                formaEntrega: '',
                descuentos: undefined,
                total: 0
            };
            const factura: Factura = {
                factura_id: '',
                cliente: new Cliente,
                productos: [],
                almacen: '',
                condicionPago: '',
                formaEntrega: '',
                descuentos: undefined,
                total: 0
            };
            repository.create.mockReturnValue(factura);
            repository.save.mockResolvedValue(factura);

            expect(await service.create(createFacturaDto)).toEqual(factura);
            expect(repository.create).toHaveBeenCalledWith(createFacturaDto);
            expect(repository.save).toHaveBeenCalledWith(factura);
        });
    });

    describe('findAll', () => {
        it('should return an array of facturas', async () => {
            const factura: Factura = {
                factura_id: '',
                cliente: new Cliente,
                productos: [],
                almacen: '',
                condicionPago: '',
                formaEntrega: '',
                descuentos: undefined,
                total: 0
            };
            repository.find.mockResolvedValue([factura]);

            expect(await service.findAll()).toEqual([factura]);
            expect(repository.find).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a single factura', async () => {
            const factura: Factura = {
                factura_id: '',
                cliente: new Cliente,
                productos: [],
                almacen: '',
                condicionPago: '',
                formaEntrega: '',
                descuentos: undefined,
                total: 0
            };
            repository.findOne.mockResolvedValue(factura);

            expect(await service.findOne('someId')).toEqual(factura);
            expect(repository.findOne).toHaveBeenCalledWith({ where: { factura_id: 'someId' } });
        });
    });

    describe('update', () => {
        it('should update a factura', async () => {
            const updateFacturaDto: UpdateFacturaDto = {
                // add properties here based on your DTO definition
            };
            const factura: Factura = {
                factura_id: '',
                cliente: new Cliente,
                productos: [],
                almacen: '',
                condicionPago: '',
                formaEntrega: '',
                descuentos: undefined,
                total: 0
            };
            repository.update.mockResolvedValue(null);
            repository.findOne.mockResolvedValue(factura);

            expect(await service.update('someId', updateFacturaDto)).toEqual(factura);
            expect(repository.update).toHaveBeenCalledWith('someId', updateFacturaDto);
            expect(repository.findOne).toHaveBeenCalledWith({ where: { factura_id: 'someId' } });
        });
    });

    describe('remove', () => {
        it('should remove a factura', async () => {
            repository.delete.mockResolvedValue(null);

            expect(await service.remove('someId')).toBeUndefined();
            expect(repository.delete).toHaveBeenCalledWith('someId');
        });
    });
});
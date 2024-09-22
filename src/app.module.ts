import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { FacturasModule } from './facturas/facturas.module';

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', // or your preferred database
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'practico2-db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: 'all', // Enable all logging
};

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        FacturasModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    private readonly logger = new Logger(AppModule.name);

    constructor() {
        this.logDatabaseConnection(typeOrmConfig);
    }

    private logDatabaseConnection(config: TypeOrmModuleOptions) {
        this.logger.log(`Connected to database: ${config.database}`);
    }
}
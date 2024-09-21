import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturasModule } from './facturas/facturas.module';

@Module({
  imports: [FacturasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

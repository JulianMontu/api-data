import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client, ClientSchema } from './entities/client.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga las variables de entorno si es necesario
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]), // Registro del esquema de Client
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService], // Exportar el servicio si lo usas en otros módulos
})
export class ClientsModule {}

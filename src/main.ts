import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Api Data')
    .setDescription('Crud rapido de clientes')
    .setVersion('1.0')
    .addTag('ApiData')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect('/api');
  });
  await app.listen(3001);
}
bootstrap();

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConnection } from './connections';
import { MessageModule } from './routes/message.module';
import { routes } from './routes/routes';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TypeOrmModule.forRoot(dbConnection),
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

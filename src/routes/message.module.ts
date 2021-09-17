import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesController } from './messages/messages.controller';

import * as SERVICES from 'src/services';
import * as ENTITIES from 'src/entity-dto';

@Module({
  imports: [TypeOrmModule.forFeature([ENTITIES.Message])],
  controllers: [MessagesController],
  providers: [SERVICES.MessagesService],
})
export class MessageModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import * as DTO_ENTITIES from '../../entity-dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(DTO_ENTITIES.Message)
    private readonly messageRepository: Repository<DTO_ENTITIES.Message>,
  ) {}

  async getAll(): Promise<DTO_ENTITIES.Message[]> {
    return await this.messageRepository.find();
  }

  async createMesage(
    message: DTO_ENTITIES.CreateMessagesDto,
  ): Promise<DTO_ENTITIES.Message> {
    const newMessage: DTO_ENTITIES.Message = new DTO_ENTITIES.Message();
    newMessage.nick = message.nick;
    newMessage.message = message.message;
    return await this.messageRepository.save(newMessage);
  }

  async updateMessage(
    idMessage: number,
    message: DTO_ENTITIES.CreateMessagesDto,
  ): Promise<DTO_ENTITIES.Message> {
    const messageUpdate: DTO_ENTITIES.Message =
      await this.messageRepository.findOne(idMessage);
    messageUpdate.nick = message.nick;
    messageUpdate.message = message.message;
    return await this.messageRepository.save(messageUpdate);
  }

  async deleteMessage(idMessage: number): Promise<DeleteResult> {
    return await this.messageRepository.delete(idMessage);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateMessagesDto } from 'src/entity-dto/messages/create-messages.dto.entity';
import { MessagesService } from 'src/services';
import { DeleteResult } from 'typeorm';

import * as DTO_ENTITIES from '../../entity-dto';

@Controller('')
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessagesDto, @Res() response) {
    this.messageService
      .createMesage(createMessageDto)
      .then((mensaje: DTO_ENTITIES.Message) => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ error: 'error creating the message' });
      });
  }

  @Get()
  getAll(@Res() response) {
    return this.messageService
      .getAll()
      .then((messages: DTO_ENTITIES.Message[]) => {
        response.status(HttpStatus.OK).json(messages);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ error: 'error getting the messages' });
      });
  }

  @Put(':id')
  updateSingleMessage(
    @Body() updateMessageDto: CreateMessagesDto,
    @Res() response,
    @Param('id') idMessage,
  ) {
    return this.messageService
      .updateMessage(idMessage, updateMessageDto)
      .then((message: DTO_ENTITIES.Message) => {
        response.status(HttpStatus.OK).json(message);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ error: 'error updating the message' });
      });
  }

  @Delete(':id')
  deleteMEssage(@Res() response, @Param('id') idMessage) {
    return this.messageService
      .deleteMessage(idMessage)
      .then((result: DeleteResult) => {
        response.status(HttpStatus.OK).json(result);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ error: 'error deleting the message' });
      });
  }
}

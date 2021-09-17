import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class CreateMessagesDto {
  readonly nick: string;
  readonly message: string;
}

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  message: string;
}

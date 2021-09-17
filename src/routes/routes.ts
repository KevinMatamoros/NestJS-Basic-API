import { Routes } from 'nest-router';
import { MessageModule } from './message.module';

export const routes: Routes = [
  {
    path: '/messages',
    module: MessageModule,
  },
];

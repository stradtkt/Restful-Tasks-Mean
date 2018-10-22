import { AuthService } from './auth.service';
import { TaskService } from './task.service';

export const services: any[] = [
  AuthService,
  TaskService
];

export * from './auth.service';
export * from './task.service';

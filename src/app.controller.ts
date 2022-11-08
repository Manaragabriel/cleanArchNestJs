import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import User from './domain/User/entities/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): User {
    const user = new User('fefef', 'efefef', 'feffr', true);
    return user
  }
}

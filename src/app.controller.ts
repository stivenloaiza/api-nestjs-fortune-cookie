import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCookie(@Query('user') user: string): string {
    return this.appService.getCookie(user);
  }
}

import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users/users.service';

@Controller('api')
export class ApiController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  // @Post('auth/register')
  // async register(@Request() req) {
  //   return this.usersService.create(req.body);
  // }
}

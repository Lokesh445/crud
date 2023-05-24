import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }



  //using jwtToken

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  //success message for using the bearer Tokenm for Login

  @UseGuards(AuthGuard('jwt'))
  @Get('test')
  async data() {
    return 'success';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

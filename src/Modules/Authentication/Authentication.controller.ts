import { Body, Controller, Post, Res } from '@nestjs/common';
import { authDto } from './auth.dto';
import { AuthService } from './Authentication.service';
import { Response } from 'express';

@Controller('/auth')
export class AuthenticationController {
  constructor(private authServ: AuthService) {}

  @Post('/signup')
  signup(@Body() body: authDto) {
    return this.authServ.signup(body);
  }

  @Post('/signin')
  async signin(@Body() body: authDto, @Res({passthrough: true}) res:Response) {
    let token = await this.authServ.signin(body)
    res.header('x-auth-token',token)
    return
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Auth } from 'src/Models/auth.entity';
import { Repository } from 'typeorm';
import { authDto } from './auth.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepo: Repository<Auth>,
  ) {}

    async signup(body:authDto){
        let existing = await this.authRepo?.findOne({where:{email:body?.email}});
        if(existing){
            throw new BadRequestException("Invalid Request",{cause:new Error(),description:"Email Id already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(body?.password,salt);
        let newAuth = await this.authRepo.create({email:body?.email,password:hash});
        await this.authRepo.save(newAuth);
        return {success:"ok"}
    }

    async signin(body: authDto) {
        let existing = await this.authRepo?.findOne({where:{email:body?.email}});
        if(!existing){
            throw new NotFoundException("Invalid Request",{description:"Email not found"})
        }
        const valid = await bcrypt.compare(body.password,existing.password);
        if(!valid){
            throw new BadRequestException("Invalid Request",{cause:new Error(),description:"Incorrect Password"})
        }
        const jwtToken = await jwt.sign({user:existing.email},"test123");
        return jwtToken
    }

}

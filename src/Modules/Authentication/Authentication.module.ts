import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Auth } from "src/Models/auth.entity";
import { AuthenticationController } from "./Authentication.controller";
import { AuthService } from "./Authentication.service";


@Module({
    providers:[AuthService],
    controllers:[AuthenticationController],
    imports:[TypeOrmModule.forFeature([Auth])]
})
export class AuthenticationModule {}
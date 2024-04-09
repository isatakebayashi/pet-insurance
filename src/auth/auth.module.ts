import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { UsersService } from "src/users/users.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [() =>({ 
        secret: process.env.JWT_SECRET
      })]
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('secret'),
          signOptions: {
            expiresIn: '60s'
          }
        };
      },
    }),
  ],
  providers: [AuthService, AuthResolver, UsersService, JwtStrategy, PrismaService]
})

export class AuthModule { }
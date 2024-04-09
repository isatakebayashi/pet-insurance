import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    private readonly logger;
    constructor(configService: ConfigService, userService: UsersService);
    validate(payload: {
        sub: User['id'];
        name: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};

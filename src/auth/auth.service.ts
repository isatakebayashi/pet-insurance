import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthInput } from './dto/auth.input';
import { compareSync } from 'bcrypt';
import { AuthType } from './dto/auth.type';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {

    const user = await this.userService.findByEmail(data.email);

    const validPassword = (data.password == user.password)

    // const validPassword = compareSync(data.password, user.password)
    console.log(`validPassword ${validPassword}`)

    console.log(`data ${data.password}`)
    console.log(`user ${user.password}`)

    if(!validPassword) {
        throw new UnauthorizedException('Incorrect password')
    }

    const token = await this.jwtToken(user)

    return {
        user, token
    }
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = { username: user.name, sub: user.id }

    return this.jwtService.signAsync(payload, { secret: '123' })
  }
}
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccountsRepository } from './repositories/accounts.repository';
import { CreateAccountBody } from './dtos/create_account_body';
import { RickAndMortyService } from './rickandmorty.service';

@Controller()
export class AppController {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  // @Post()
  // async createAccount(@Body() body: CreateAccountBody) {
  //   const { name } = body

  //   const account = await this.accountsRepository.create(name)

  //   return account
  // }

  // @Get()
  // findAll() {
  //   return this.accountsRepository.findAll()
  // }

  @Get('/rickandmorty')
  rickAndMort() {
    return this.rickAndMortyService.findAll()
  }
}

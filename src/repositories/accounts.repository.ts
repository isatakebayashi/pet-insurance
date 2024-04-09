import { Account } from "@prisma/client";

export abstract class AccountsRepository {
    create(name: string): Promise<Account> {
      throw new Error('Method not implemented')
    }
    
    findAll() {
      throw new Error('Method not implemented')
    }
    
    findOne(id: string) {}
  
    // update(id: string, name: string): Promise<void> {
    //   throw new Error('Not implemented')
    // }
  }
  
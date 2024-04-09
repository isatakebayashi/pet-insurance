export abstract class UsersRepository {
  // create(name: string, email: string, password: string): Promise<void> {
  //   throw new Error('Method not implemented')
  // }
  
  findAll() {}
  
  findOne(id: string) {}

  update(id: string, name: string, email: string, password: string): Promise<void> {
    throw new Error('Not implemented')
  }
}

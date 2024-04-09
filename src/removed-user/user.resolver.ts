// import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
// import { UserService } from './user.service';
// import { CreateUserInput } from './dto/create-user.input';
// // import { User } from './user.entity'
// import { UpdateUserInput } from './dto/update-user.input';
// import { IsEmail } from 'class-validator';
// import { UseGuards } from '@nestjs/common';
// import { GqlAuthGuard } from 'src/auth/auth.guard';
// import { AccountsRepository } from 'src/repositories/accounts.repository';

// @Resolver('User')
// export class UserResolver {
//     constructor(
//         private accountsRepository: AccountsRepository
//     ) {}

//   //  @Query(() => [User])
//     // @UseGuards(GqlAuthGuard)
//     // async users(): Promise<User[]> {
//     //     const users = await this.accountsRepository.findAllUsers();

//     //     return users
//     // }

//     // @UseGuards(GqlAuthGuard)
//     // @Query(() => User)
//     // async user(
//     //     @Args('id') id: string
//     // ): Promise<User> {
//     //     const user = this.userService.findUserById(id);

//     //     return user;
//     // }

// //     @UseGuards(GqlAuthGuard)
// //     @Query(() => User)
// //     async userByEmail(
// //         @Args('email') email: string
// //     ): Promise<User> {
// //         const user = this.userService.getUserByEmail(email);

// //         return user;
// //     }

// //     @Mutation(() => User)
// //     async createUser(
// //         @Args('data') data: CreateUserInput
// //     ): Promise<User> {
// //         const user = await this.userService.createUser(data);
// //         return user;
// //     }

// //     @Mutation(() => User)
// //     async updateUser(
// //         @Args('id') id: string,
// //         @Args('data') data: UpdateUserInput
// //     ): Promise<User> {
// //         const user = await this.userService.updateUser(id, data);

// //         return user;
// //     }

// //     @Mutation(() => Boolean)
// //     async deleteUser(
// //         @Args('id') id: string
// //     ): Promise<boolean> {
// //         const user = await this.userService.deleteUser(id);

// //         return user;
// //     }
// }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
// import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { PrismaUsersRepository } from './repositories/prisma/prisma-users.repository';
import { AccountsRepository } from './repositories/accounts.repository';
import { PrismaAccountsRepository } from './repositories/prisma/prisma-accounts.repository';
// import { UserResolver } from './user/user.resolver';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { HttpModule } from '@nestjs/axios';
import { RickAndMortyService } from './rickandmorty.service';
import { PetsModule } from './pets/pets.module';
import { PoliciesModule } from './policies/policies.module';
import { PlansModule } from './plans/plans.module';
import { CoveragesModule } from './coverages/coverages.module';
import { ProceduresModule } from './procedures/procedures.module';
import { ProceduresByPlanModule } from './procedures-by-plan/procedures-by-plan.module';
import { PlanCoveragesModule } from './plan-coverages/plan-coverages.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    AccountsModule,
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: "postgres",
    //   host: "localhost",
    //   port: 5432,
    //   username: "postgres", 
    //   password: "postgres",
    //   autoLoadEntities: true,
    //   // entities: ["dist/**/*.entity{.ts,.js}"],
    //   synchronize: true
    // }
    // ),
    // GraphQLModule.forRoot({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   context: ({ req }) => ({ req })
    // }),
  //  AuthModule,
    AddressesModule,
    HttpModule,
    PetsModule,
    PoliciesModule,
    PlansModule,
    CoveragesModule,
    ProceduresModule,
    ProceduresByPlanModule,
    PlanCoveragesModule
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: AccountsRepository,
      useClass: PrismaAccountsRepository
    },
    RickAndMortyService
  ],
})
export class AppModule {}

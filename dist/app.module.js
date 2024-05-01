"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma.service");
const accounts_repository_1 = require("./repositories/accounts.repository");
const prisma_accounts_repository_1 = require("./repositories/prisma/prisma-accounts.repository");
const accounts_module_1 = require("./accounts/accounts.module");
const users_module_1 = require("./users/users.module");
const addresses_module_1 = require("./addresses/addresses.module");
const axios_1 = require("@nestjs/axios");
const rickandmorty_service_1 = require("./rickandmorty.service");
const pets_module_1 = require("./pets/pets.module");
const policies_module_1 = require("./policies/policies.module");
const plans_module_1 = require("./plans/plans.module");
const coverages_module_1 = require("./coverages/coverages.module");
const procedures_module_1 = require("./procedures/procedures.module");
const procedures_by_plan_module_1 = require("./procedures-by-plan/procedures-by-plan.module");
const plan_coverages_module_1 = require("./plan-coverages/plan-coverages.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql')
            }),
            accounts_module_1.AccountsModule,
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
            axios_1.HttpModule,
            pets_module_1.PetsModule,
            policies_module_1.PoliciesModule,
            plans_module_1.PlansModule,
            coverages_module_1.CoveragesModule,
            procedures_module_1.ProceduresModule,
            procedures_by_plan_module_1.ProceduresByPlanModule,
            plan_coverages_module_1.PlanCoveragesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: accounts_repository_1.AccountsRepository,
                useClass: prisma_accounts_repository_1.PrismaAccountsRepository
            },
            rickandmorty_service_1.RickAndMortyService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
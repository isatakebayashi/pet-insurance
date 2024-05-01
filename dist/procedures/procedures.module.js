"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProceduresModule = void 0;
const common_1 = require("@nestjs/common");
const procedures_service_1 = require("./procedures.service");
const procedures_resolver_1 = require("./procedures.resolver");
const prisma_service_1 = require("../prisma.service");
let ProceduresModule = class ProceduresModule {
};
exports.ProceduresModule = ProceduresModule;
exports.ProceduresModule = ProceduresModule = __decorate([
    (0, common_1.Module)({
        providers: [procedures_resolver_1.ProceduresResolver, procedures_service_1.ProceduresService, prisma_service_1.PrismaService],
    })
], ProceduresModule);
//# sourceMappingURL=procedures.module.js.map
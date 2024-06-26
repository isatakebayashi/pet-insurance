"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProceduresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProceduresService = class ProceduresService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createProcedureInput) {
        return await this.prismaService.procedure.create({
            data: createProcedureInput
        });
    }
    findAll() {
        return this.prismaService.procedure.findMany({
            include: {
                proceduresByPlan: true
            }
        });
    }
    findOne(id) {
        return this.prismaService.procedure.findUnique({
            where: {
                id
            }
        });
    }
    update(id, updateProcedureInput) {
        return `This action updates a #${id} procedure`;
    }
    remove(id) {
        return `This action removes a #${id} procedure`;
    }
};
exports.ProceduresService = ProceduresService;
exports.ProceduresService = ProceduresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProceduresService);
//# sourceMappingURL=procedures.service.js.map
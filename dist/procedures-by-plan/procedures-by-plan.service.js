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
exports.ProceduresByPlanService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProceduresByPlanService = class ProceduresByPlanService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createProcedureByPlanInput) {
        return await this.prismaService.procedureByPlan.create({
            data: createProcedureByPlanInput
        });
    }
    findAll() {
        return this.prismaService.procedureByPlan.findMany({
            include: {
                procedure: true,
                plan: true
            }
        });
    }
    findOne(id) {
        return this.prismaService.procedureByPlan.findUnique({
            where: {
                id
            },
            include: {
                plan: true,
                procedure: true
            }
        });
    }
    async findByPlan(planId) {
        console.log(`planId ${planId}`);
        return await this.prismaService.procedureByPlan.findMany({
            where: {
                planId: planId
            }
        });
    }
    update(id, updateProceduresByPlanInput) {
        return `This action updates a #${id} proceduresByPlan`;
    }
    remove(id) {
        return `This action removes a #${id} proceduresByPlan`;
    }
};
exports.ProceduresByPlanService = ProceduresByPlanService;
exports.ProceduresByPlanService = ProceduresByPlanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProceduresByPlanService);
//# sourceMappingURL=procedures-by-plan.service.js.map
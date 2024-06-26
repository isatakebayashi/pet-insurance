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
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PlansService = class PlansService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPlanInput) {
        return await this.prismaService.plan.create({
            data: createPlanInput
        });
    }
    findAll() {
        return this.prismaService.plan.findMany({
            include: {
                policies: true,
                proceduresByPlan: true,
                coverages: true
            }
        });
    }
    findOne(id) {
        return this.prismaService.plan.findUnique({
            where: {
                id
            },
            include: {
                policies: true,
                proceduresByPlan: { include: { procedure: true } },
                coverages: { include: { plan: true, coverage: { include: { procedures: true } } } }
            }
        });
    }
    update(id, updatePlanInput) {
        return `This action updates a #${id} plan`;
    }
    remove(id) {
        return `This action removes a #${id} plan`;
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlansService);
//# sourceMappingURL=plans.service.js.map
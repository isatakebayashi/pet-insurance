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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProceduresByPlanResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const procedures_by_plan_service_1 = require("./procedures-by-plan.service");
const procedure_by_plan_entity_1 = require("./entities/procedure-by-plan.entity");
const create_procedure_by_plan_input_1 = require("./dto/create-procedure-by-plan.input");
const update_procedure_by_plan_input_1 = require("./dto/update-procedure-by-plan.input");
let ProceduresByPlanResolver = class ProceduresByPlanResolver {
    constructor(proceduresByPlanService) {
        this.proceduresByPlanService = proceduresByPlanService;
    }
    createProceduresByPlan(createProcedureByPlanInput) {
        return this.proceduresByPlanService.create(createProcedureByPlanInput);
    }
    findAll() {
        return this.proceduresByPlanService.findAll();
    }
    findOne(id) {
        return this.proceduresByPlanService.findOne(id);
    }
    async findByPlan(planId) {
        return await this.proceduresByPlanService.findByPlan(planId);
    }
    updateProceduresByPlan(updateProcedureByPlanInput) {
        return this.proceduresByPlanService.update(updateProcedureByPlanInput.id, updateProcedureByPlanInput);
    }
    removeProceduresByPlan(id) {
        return this.proceduresByPlanService.remove(id);
    }
};
exports.ProceduresByPlanResolver = ProceduresByPlanResolver;
__decorate([
    (0, graphql_1.Mutation)(() => procedure_by_plan_entity_1.ProcedureByPlan),
    __param(0, (0, graphql_1.Args)('createProcedureByPlanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_procedure_by_plan_input_1.CreateProcedureByPlanInput]),
    __metadata("design:returntype", void 0)
], ProceduresByPlanResolver.prototype, "createProceduresByPlan", null);
__decorate([
    (0, graphql_1.Query)(() => [procedure_by_plan_entity_1.ProcedureByPlan], { name: 'proceduresByPlan' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProceduresByPlanResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => procedure_by_plan_entity_1.ProcedureByPlan, { name: 'procedureByPlan' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProceduresByPlanResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [procedure_by_plan_entity_1.ProcedureByPlan], { name: 'proceduresByPlanId' }),
    __param(0, (0, graphql_1.Args)('planId', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProceduresByPlanResolver.prototype, "findByPlan", null);
__decorate([
    (0, graphql_1.Mutation)(() => procedure_by_plan_entity_1.ProcedureByPlan),
    __param(0, (0, graphql_1.Args)('updateProcedureByPlanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_procedure_by_plan_input_1.UpdateProcedureByPlanInput]),
    __metadata("design:returntype", void 0)
], ProceduresByPlanResolver.prototype, "updateProceduresByPlan", null);
__decorate([
    (0, graphql_1.Mutation)(() => procedure_by_plan_entity_1.ProcedureByPlan),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProceduresByPlanResolver.prototype, "removeProceduresByPlan", null);
exports.ProceduresByPlanResolver = ProceduresByPlanResolver = __decorate([
    (0, graphql_1.Resolver)(() => procedure_by_plan_entity_1.ProcedureByPlan),
    __metadata("design:paramtypes", [procedures_by_plan_service_1.ProceduresByPlanService])
], ProceduresByPlanResolver);
//# sourceMappingURL=procedures-by-plan.resolver.js.map
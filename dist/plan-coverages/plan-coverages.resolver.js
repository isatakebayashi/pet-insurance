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
exports.PlanCoveragesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const plan_coverages_service_1 = require("./plan-coverages.service");
const plan_coverage_entity_1 = require("./entities/plan-coverage.entity");
const create_plan_coverage_input_1 = require("./dto/create-plan-coverage.input");
const update_plan_coverage_input_1 = require("./dto/update-plan-coverage.input");
let PlanCoveragesResolver = class PlanCoveragesResolver {
    constructor(planCoveragesService) {
        this.planCoveragesService = planCoveragesService;
    }
    createPlanCoverage(createPlanCoverageInput) {
        return this.planCoveragesService.create(createPlanCoverageInput);
    }
    findAll() {
        return this.planCoveragesService.findAll();
    }
    findOne(id) {
        return this.planCoveragesService.findOne(id);
    }
    updatePlanCoverage(updatePlanCoverageInput) {
        return this.planCoveragesService.update(updatePlanCoverageInput.id, updatePlanCoverageInput);
    }
    removePlanCoverage(id) {
        return this.planCoveragesService.remove(id);
    }
};
exports.PlanCoveragesResolver = PlanCoveragesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => plan_coverage_entity_1.PlanCoverage),
    __param(0, (0, graphql_1.Args)('createPlanCoverageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_coverage_input_1.CreatePlanCoverageInput]),
    __metadata("design:returntype", void 0)
], PlanCoveragesResolver.prototype, "createPlanCoverage", null);
__decorate([
    (0, graphql_1.Query)(() => [plan_coverage_entity_1.PlanCoverage], { name: 'planCoverages' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlanCoveragesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => plan_coverage_entity_1.PlanCoverage, { name: 'planCoverage' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlanCoveragesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => plan_coverage_entity_1.PlanCoverage),
    __param(0, (0, graphql_1.Args)('updatePlanCoverageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_plan_coverage_input_1.UpdatePlanCoverageInput]),
    __metadata("design:returntype", void 0)
], PlanCoveragesResolver.prototype, "updatePlanCoverage", null);
__decorate([
    (0, graphql_1.Mutation)(() => plan_coverage_entity_1.PlanCoverage),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlanCoveragesResolver.prototype, "removePlanCoverage", null);
exports.PlanCoveragesResolver = PlanCoveragesResolver = __decorate([
    (0, graphql_1.Resolver)(() => plan_coverage_entity_1.PlanCoverage),
    __metadata("design:paramtypes", [plan_coverages_service_1.PlanCoveragesService])
], PlanCoveragesResolver);
//# sourceMappingURL=plan-coverages.resolver.js.map
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
exports.PlansResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const plans_service_1 = require("./plans.service");
const plan_entity_1 = require("./entities/plan.entity");
const create_plan_input_1 = require("./dto/create-plan.input");
const update_plan_input_1 = require("./dto/update-plan.input");
let PlansResolver = class PlansResolver {
    constructor(plansService) {
        this.plansService = plansService;
    }
    createPlan(createPlanInput) {
        return this.plansService.create(createPlanInput);
    }
    findAll() {
        return this.plansService.findAll();
    }
    findOne(id) {
        return this.plansService.findOne(id);
    }
    updatePlan(updatePlanInput) {
        return this.plansService.update(updatePlanInput.id, updatePlanInput);
    }
    removePlan(id) {
        return this.plansService.remove(id);
    }
};
exports.PlansResolver = PlansResolver;
__decorate([
    (0, graphql_1.Mutation)(() => plan_entity_1.Plan),
    __param(0, (0, graphql_1.Args)('createPlanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_input_1.CreatePlanInput]),
    __metadata("design:returntype", void 0)
], PlansResolver.prototype, "createPlan", null);
__decorate([
    (0, graphql_1.Query)(() => [plan_entity_1.Plan], { name: 'plans' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlansResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => plan_entity_1.Plan, { name: 'plan' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlansResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => plan_entity_1.Plan),
    __param(0, (0, graphql_1.Args)('updatePlanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_plan_input_1.UpdatePlanInput]),
    __metadata("design:returntype", void 0)
], PlansResolver.prototype, "updatePlan", null);
__decorate([
    (0, graphql_1.Mutation)(() => plan_entity_1.Plan),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlansResolver.prototype, "removePlan", null);
exports.PlansResolver = PlansResolver = __decorate([
    (0, graphql_1.Resolver)(() => plan_entity_1.Plan),
    __metadata("design:paramtypes", [plans_service_1.PlansService])
], PlansResolver);
//# sourceMappingURL=plans.resolver.js.map
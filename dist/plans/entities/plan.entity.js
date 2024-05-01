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
exports.Plan = void 0;
const eager_import_0 = require("../../policies/entities/policy.entity");
const graphql_1 = require("@nestjs/graphql");
const plan_coverage_entity_1 = require("../../plan-coverages/entities/plan-coverage.entity");
const procedure_by_plan_entity_1 = require("../../procedures-by-plan/entities/procedure-by-plan.entity");
let Plan = class Plan {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.Plan = Plan;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], Plan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Plan.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Plan.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], Plan.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(() => [require("../../policies/entities/policy.entity").Policy], {}),
    __metadata("design:type", Array)
], Plan.prototype, "policies", void 0);
__decorate([
    (0, graphql_1.Field)(() => [procedure_by_plan_entity_1.ProcedureByPlan], { nullable: true }),
    __metadata("design:type", Array)
], Plan.prototype, "proceduresByPlan", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_coverage_entity_1.PlanCoverage], { nullable: true }),
    __metadata("design:type", Array)
], Plan.prototype, "coverages", void 0);
exports.Plan = Plan = __decorate([
    (0, graphql_1.ObjectType)()
], Plan);
//# sourceMappingURL=plan.entity.js.map
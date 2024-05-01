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
exports.PlanCoverage = void 0;
const eager_import_0 = require("../../plans/entities/plan.entity");
const eager_import_1 = require("../../coverages/entities/coverage.entity");
const graphql_1 = require("@nestjs/graphql");
const coverage_entity_1 = require("../../coverages/entities/coverage.entity");
const plan_entity_1 = require("../../plans/entities/plan.entity");
let PlanCoverage = class PlanCoverage {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.PlanCoverage = PlanCoverage;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PlanCoverage.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], PlanCoverage.prototype, "planId", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../plans/entities/plan.entity").Plan, { nullable: true }),
    __metadata("design:type", plan_entity_1.Plan)
], PlanCoverage.prototype, "plan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], PlanCoverage.prototype, "coverageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../coverages/entities/coverage.entity").Coverage, { nullable: true }),
    __metadata("design:type", coverage_entity_1.Coverage)
], PlanCoverage.prototype, "coverage", void 0);
exports.PlanCoverage = PlanCoverage = __decorate([
    (0, graphql_1.ObjectType)()
], PlanCoverage);
//# sourceMappingURL=plan-coverage.entity.js.map
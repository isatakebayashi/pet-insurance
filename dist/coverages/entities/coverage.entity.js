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
exports.Coverage = void 0;
const graphql_1 = require("@nestjs/graphql");
const plan_coverage_entity_1 = require("../../plan-coverages/entities/plan-coverage.entity");
const procedure_entity_1 = require("../../procedures/entities/procedure.entity");
let Coverage = class Coverage {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.Coverage = Coverage;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], Coverage.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Coverage.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [procedure_entity_1.Procedure], { nullable: true }),
    __metadata("design:type", Array)
], Coverage.prototype, "procedures", void 0);
__decorate([
    (0, graphql_1.Field)(() => [plan_coverage_entity_1.PlanCoverage], { nullable: true }),
    __metadata("design:type", Array)
], Coverage.prototype, "coverages", void 0);
exports.Coverage = Coverage = __decorate([
    (0, graphql_1.ObjectType)()
], Coverage);
//# sourceMappingURL=coverage.entity.js.map
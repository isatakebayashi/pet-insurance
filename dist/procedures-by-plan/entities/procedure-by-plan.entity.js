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
exports.ProcedureByPlan = void 0;
const eager_import_0 = require("../../procedures/entities/procedure.entity");
const eager_import_1 = require("../../plans/entities/plan.entity");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const plan_entity_1 = require("../../plans/entities/plan.entity");
const procedure_entity_1 = require("../../procedures/entities/procedure.entity");
let ProcedureByPlan = class ProcedureByPlan {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProcedureByPlan = ProcedureByPlan;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], ProcedureByPlan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], ProcedureByPlan.prototype, "availableLimit", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], ProcedureByPlan.prototype, "share", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.availableLimit !== 'unlimited'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], ProcedureByPlan.prototype, "valueToAnticipate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], ProcedureByPlan.prototype, "procedureId", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../procedures/entities/procedure.entity").Procedure, { nullable: true }),
    __metadata("design:type", procedure_entity_1.Procedure)
], ProcedureByPlan.prototype, "procedure", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], ProcedureByPlan.prototype, "planId", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../plans/entities/plan.entity").Plan, { nullable: true }),
    __metadata("design:type", plan_entity_1.Plan)
], ProcedureByPlan.prototype, "plan", void 0);
exports.ProcedureByPlan = ProcedureByPlan = __decorate([
    (0, graphql_1.ObjectType)()
], ProcedureByPlan);
//# sourceMappingURL=procedure-by-plan.entity.js.map
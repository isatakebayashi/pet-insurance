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
exports.Policy = void 0;
const eager_import_0 = require("../../pets/entities/pet.entity");
const eager_import_1 = require("../../plans/entities/plan.entity");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const pet_entity_1 = require("../../pets/entities/pet.entity");
const plan_entity_1 = require("../../plans/entities/plan.entity");
let Policy = class Policy {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.Policy = Policy;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], Policy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../pets/entities/pet.entity").Pet, {}),
    __metadata("design:type", pet_entity_1.Pet)
], Policy.prototype, "pet", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], Policy.prototype, "petId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], Policy.prototype, "microchipNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    (0, class_validator_1.IsIn)(['active', 'inactive']),
    __metadata("design:type", String)
], Policy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {}),
    __metadata("design:type", Date)
], Policy.prototype, "initialGraceDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {}),
    __metadata("design:type", Date)
], Policy.prototype, "renewalOfLimits", void 0);
__decorate([
    (0, graphql_1.Field)(() => require("../../plans/entities/plan.entity").Plan, {}),
    __metadata("design:type", plan_entity_1.Plan)
], Policy.prototype, "plan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], Policy.prototype, "planId", void 0);
exports.Policy = Policy = __decorate([
    (0, graphql_1.ObjectType)()
], Policy);
//# sourceMappingURL=policy.entity.js.map
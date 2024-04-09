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
exports.CreatePetInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreatePetInput = class CreatePetInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreatePetInput = CreatePetInput;
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    (0, class_validator_1.IsIn)(['dog', 'cat']),
    __metadata("design:type", String)
], CreatePetInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreatePetInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreatePetInput.prototype, "breed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, {}),
    __metadata("design:type", Date)
], CreatePetInput.prototype, "birthDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], CreatePetInput.prototype, "userId", void 0);
exports.CreatePetInput = CreatePetInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePetInput);
//# sourceMappingURL=create-pet.input.js.map
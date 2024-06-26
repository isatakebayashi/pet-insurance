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
exports.CreateAddressInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateAddressInput = class CreateAddressInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CreateAddressInput = CreateAddressInput;
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "complement", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "neighborhood", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "zipcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], CreateAddressInput.prototype, "addressType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], CreateAddressInput.prototype, "userId", void 0);
exports.CreateAddressInput = CreateAddressInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAddressInput);
//# sourceMappingURL=create-address.input.js.map
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
exports.UpdateAddressInput = void 0;
const create_address_input_1 = require("./create-address.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateAddressInput = class UpdateAddressInput extends (0, graphql_1.PartialType)(create_address_input_1.CreateAddressInput) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UpdateAddressInput = UpdateAddressInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], UpdateAddressInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "complement", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "neighborhood", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "zipcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAddressInput.prototype, "addressType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], UpdateAddressInput.prototype, "userId", void 0);
exports.UpdateAddressInput = UpdateAddressInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAddressInput);
//# sourceMappingURL=update-address.input.js.map
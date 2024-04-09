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
exports.UpdateAccountInput = void 0;
const create_account_input_1 = require("./create-account.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateAccountInput = class UpdateAccountInput extends (0, graphql_1.PartialType)(create_account_input_1.CreateAccountInput) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.UpdateAccountInput = UpdateAccountInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], UpdateAccountInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], UpdateAccountInput.prototype, "name", void 0);
exports.UpdateAccountInput = UpdateAccountInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAccountInput);
//# sourceMappingURL=update-account.input.js.map
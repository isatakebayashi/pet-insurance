"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesService = void 0;
const common_1 = require("@nestjs/common");
let PoliciesService = class PoliciesService {
    create(createPolicyInput) {
        return 'This action adds a new policy';
    }
    findAll() {
        return `This action returns all policies`;
    }
    findOne(id) {
        return `This action returns a #${id} policy`;
    }
    update(id, updatePolicyInput) {
        return `This action updates a #${id} policy`;
    }
    remove(id) {
        return `This action removes a #${id} policy`;
    }
};
exports.PoliciesService = PoliciesService;
exports.PoliciesService = PoliciesService = __decorate([
    (0, common_1.Injectable)()
], PoliciesService);
//# sourceMappingURL=policies.service.js.map
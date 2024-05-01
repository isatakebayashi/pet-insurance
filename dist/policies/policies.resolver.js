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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const policies_service_1 = require("./policies.service");
const policy_entity_1 = require("./entities/policy.entity");
const create_policy_input_1 = require("./dto/create-policy.input");
const update_policy_input_1 = require("./dto/update-policy.input");
let PoliciesResolver = class PoliciesResolver {
    constructor(policiesService) {
        this.policiesService = policiesService;
    }
    createPolicy(createPolicyInput) {
        return this.policiesService.create(createPolicyInput);
    }
    findAll() {
        return this.policiesService.findAll();
    }
    findOne(id) {
        return this.policiesService.findOne(id);
    }
    updatePolicy(updatePolicyInput) {
        return this.policiesService.update(updatePolicyInput.id, updatePolicyInput);
    }
    removePolicy(id) {
        return this.policiesService.remove(id);
    }
};
exports.PoliciesResolver = PoliciesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => policy_entity_1.Policy),
    __param(0, (0, graphql_1.Args)('createPolicyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_policy_input_1.CreatePolicyInput]),
    __metadata("design:returntype", void 0)
], PoliciesResolver.prototype, "createPolicy", null);
__decorate([
    (0, graphql_1.Query)(() => [policy_entity_1.Policy], { name: 'policies' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PoliciesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => policy_entity_1.Policy, { name: 'policy' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PoliciesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => policy_entity_1.Policy),
    __param(0, (0, graphql_1.Args)('updatePolicyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_policy_input_1.UpdatePolicyInput]),
    __metadata("design:returntype", void 0)
], PoliciesResolver.prototype, "updatePolicy", null);
__decorate([
    (0, graphql_1.Mutation)(() => policy_entity_1.Policy),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PoliciesResolver.prototype, "removePolicy", null);
exports.PoliciesResolver = PoliciesResolver = __decorate([
    (0, graphql_1.Resolver)(() => policy_entity_1.Policy),
    __metadata("design:paramtypes", [policies_service_1.PoliciesService])
], PoliciesResolver);
//# sourceMappingURL=policies.resolver.js.map
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
exports.CoveragesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const coverages_service_1 = require("./coverages.service");
const coverage_entity_1 = require("./entities/coverage.entity");
const create_coverage_input_1 = require("./dto/create-coverage.input");
const update_coverage_input_1 = require("./dto/update-coverage.input");
let CoveragesResolver = class CoveragesResolver {
    constructor(coveragesService) {
        this.coveragesService = coveragesService;
    }
    createCoverage(createCoverageInput) {
        return this.coveragesService.create(createCoverageInput);
    }
    findAll() {
        return this.coveragesService.findAll();
    }
    findOne(id) {
        return this.coveragesService.findOne(id);
    }
    updateCoverage(updateCoverageInput) {
        return this.coveragesService.update(updateCoverageInput.id, updateCoverageInput);
    }
    removeCoverage(id) {
        return this.coveragesService.remove(id);
    }
};
exports.CoveragesResolver = CoveragesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => coverage_entity_1.Coverage),
    __param(0, (0, graphql_1.Args)('createCoverageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coverage_input_1.CreateCoverageInput]),
    __metadata("design:returntype", void 0)
], CoveragesResolver.prototype, "createCoverage", null);
__decorate([
    (0, graphql_1.Query)(() => [coverage_entity_1.Coverage], { name: 'coverages' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoveragesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => coverage_entity_1.Coverage, { name: 'coverage' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoveragesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => coverage_entity_1.Coverage),
    __param(0, (0, graphql_1.Args)('updateCoverageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_coverage_input_1.UpdateCoverageInput]),
    __metadata("design:returntype", void 0)
], CoveragesResolver.prototype, "updateCoverage", null);
__decorate([
    (0, graphql_1.Mutation)(() => coverage_entity_1.Coverage),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoveragesResolver.prototype, "removeCoverage", null);
exports.CoveragesResolver = CoveragesResolver = __decorate([
    (0, graphql_1.Resolver)(() => coverage_entity_1.Coverage),
    __metadata("design:paramtypes", [coverages_service_1.CoveragesService])
], CoveragesResolver);
//# sourceMappingURL=coverages.resolver.js.map
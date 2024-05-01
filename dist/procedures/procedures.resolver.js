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
exports.ProceduresResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const procedures_service_1 = require("./procedures.service");
const procedure_entity_1 = require("./entities/procedure.entity");
const create_procedure_input_1 = require("./dto/create-procedure.input");
const update_procedure_input_1 = require("./dto/update-procedure.input");
let ProceduresResolver = class ProceduresResolver {
    constructor(proceduresService) {
        this.proceduresService = proceduresService;
    }
    createProcedure(createProcedureInput) {
        return this.proceduresService.create(createProcedureInput);
    }
    findAll() {
        return this.proceduresService.findAll();
    }
    findOne(id) {
        return this.proceduresService.findOne(id);
    }
    updateProcedure(updateProcedureInput) {
        return this.proceduresService.update(updateProcedureInput.id, updateProcedureInput);
    }
    removeProcedure(id) {
        return this.proceduresService.remove(id);
    }
};
exports.ProceduresResolver = ProceduresResolver;
__decorate([
    (0, graphql_1.Mutation)(() => procedure_entity_1.Procedure),
    __param(0, (0, graphql_1.Args)('createProcedureInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_procedure_input_1.CreateProcedureInput]),
    __metadata("design:returntype", void 0)
], ProceduresResolver.prototype, "createProcedure", null);
__decorate([
    (0, graphql_1.Query)(() => [procedure_entity_1.Procedure], { name: 'procedures' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProceduresResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => procedure_entity_1.Procedure, { name: 'procedure' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProceduresResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => procedure_entity_1.Procedure),
    __param(0, (0, graphql_1.Args)('updateProcedureInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_procedure_input_1.UpdateProcedureInput]),
    __metadata("design:returntype", void 0)
], ProceduresResolver.prototype, "updateProcedure", null);
__decorate([
    (0, graphql_1.Mutation)(() => procedure_entity_1.Procedure),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProceduresResolver.prototype, "removeProcedure", null);
exports.ProceduresResolver = ProceduresResolver = __decorate([
    (0, graphql_1.Resolver)(() => procedure_entity_1.Procedure),
    __metadata("design:paramtypes", [procedures_service_1.ProceduresService])
], ProceduresResolver);
//# sourceMappingURL=procedures.resolver.js.map
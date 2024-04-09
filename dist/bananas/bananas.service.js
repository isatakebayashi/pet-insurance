"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BananasService = void 0;
const common_1 = require("@nestjs/common");
let BananasService = class BananasService {
    create(createBananaInput) {
        return 'This action adds a new banana';
    }
    findAll() {
        return `This action returns all bananas`;
    }
    findOne(id) {
        return `This action returns a #${id} banana`;
    }
    update(id, updateBananaInput) {
        return `This action updates a #${id} banana`;
    }
    remove(id) {
        return `This action removes a #${id} banana`;
    }
};
exports.BananasService = BananasService;
exports.BananasService = BananasService = __decorate([
    (0, common_1.Injectable)()
], BananasService);
//# sourceMappingURL=bananas.service.js.map
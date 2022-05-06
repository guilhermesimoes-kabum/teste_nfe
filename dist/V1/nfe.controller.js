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
exports.NFeController = void 0;
const common_1 = require("@nestjs/common");
const facade_1 = require("./facade");
let NFeController = class NFeController {
    constructor() {
        this.facade = new facade_1.Facade();
    }
    async issueSalesInvoicy(id_pedido) {
        try {
            return this.facade.issueSalesInvoicy(id_pedido);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Post)('/:id_pedido'),
    __param(0, (0, common_1.Param)('id_pedido')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NFeController.prototype, "issueSalesInvoicy", null);
NFeController = __decorate([
    (0, common_1.Controller)('nfe'),
    __metadata("design:paramtypes", [])
], NFeController);
exports.NFeController = NFeController;
//# sourceMappingURL=nfe.controller.js.map
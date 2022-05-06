"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = void 0;
const invoicy_1 = require("./invoicy/invoicy");
const nfesale_repository_1 = require("./repositories/nfesale.repository");
const order_repository_1 = require("./repositories/order.repository");
const nfesale_service_1 = require("./services/nfesale.service");
class Facade {
    constructor() {
        this.nfeRepository = new nfesale_repository_1.NFeSaleRepository();
        this.orderRepository = new order_repository_1.OrderRepository();
        this.issuer = new invoicy_1.Invoicy();
    }
    issueSalesInvoicy(id_pedido) {
        const service = new nfesale_service_1.NFeSaleService(this.nfeRepository, this.orderRepository, this.issuer, this.deliveryCityRepository, this.issuerRepository, this.shippingCompanyRepository, this.clientRepository);
        return service.issueSalesInvoicy(id_pedido);
    }
}
exports.Facade = Facade;
//# sourceMappingURL=facade.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFeSaleService = void 0;
class NFeSaleService {
    constructor(nfeRepository, orderRepository, issuer, deliveryCityRepository, issuerRepository, shippingCompanyRepository, clientRepository) {
        this.nfeRepository = nfeRepository;
        this.orderRepository = orderRepository;
        this.issuer = issuer;
        this.deliveryCityRepository = deliveryCityRepository;
        this.issuerRepository = issuerRepository;
        this.shippingCompanyRepository = shippingCompanyRepository;
        this.clientRepository = clientRepository;
    }
    async issueSalesInvoicy(idOrder) {
        const informationOrderToInvoicy = this.getInformationOrderToInvoicy(idOrder);
        return this.issuer.sendInvoicy();
    }
    getInformationOrderToInvoicy(idOrder) {
        const order = this.orderRepository.findOrderToIssuerById(idOrder);
        this.checkIfAlreadyExistsInvoicyIssued(order.codigo);
        const deliveryCity = this.deliveryCityRepository.findDeliveryCityToIssuer(order.endereco_cidade);
        const issuer = this.issuerRepository.findByCDcodeToIssuerInvoicy(deliveryCity.estado, order.cd_codigo);
        const shippingCompany = this.shippingCompanyRepository.findByCodeFreightToIssuer(order.frete_codigo);
        const client = this.clientRepository.findByClientIdToIssuer(order.id_cliente);
        const items = this.orderRepository.getItemsOfTheOrderToIssuer(idOrder);
        const serie = 1;
        const nNF = this.nfeRepository.getNumber(order.cd_codigo, serie);
        const debug = true;
        const typeOperation = 1;
        const parameterToEmission = {
            order, deliveryCity, issuer, shippingCompany, client, items, nNF, serie, debug, typeOperation
        };
        return parameterToEmission;
    }
    checkIfAlreadyExistsInvoicyIssued(orderCode) {
        const alreadyContainsNfeIssued = this.nfeRepository.alreadyContainsNfeIssued(orderCode);
        if (alreadyContainsNfeIssued) {
            throw new Error;
        }
    }
}
exports.NFeSaleService = NFeSaleService;
//# sourceMappingURL=nfesale.service.js.map
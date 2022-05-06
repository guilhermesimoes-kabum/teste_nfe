"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nfesale_service_1 = require("../services/nfesale.service");
const ParametersToIssueStub_1 = require("./ParametersToIssueStub");
describe('NFeSaleService', () => {
    let service;
    let repositoryNFe;
    let orderRepository;
    let issuer;
    let parameterToIssuer;
    let deliveryCityRepository;
    let issuerRepository;
    let shippingCompanyRepository;
    let clientRepository;
    beforeEach(async () => {
        parameterToIssuer = ParametersToIssueStub_1.ParameterToIssueStub.get();
        repositoryNFe = {
            alreadyContainsNfeIssued: jest.fn(() => { return false; }),
            getNumber: jest.fn(() => { return 10; })
        };
        orderRepository = {
            findOrderToIssuerById: jest.fn(() => { return parameterToIssuer.order; }),
            getItemsOfTheOrderToIssuer: jest.fn(() => { return parameterToIssuer.items; })
        };
        issuer = { sendInvoicy: jest.fn(() => { return new Promise(function () { }); }) };
        deliveryCityRepository = { findDeliveryCityToIssuer: jest.fn(() => { return parameterToIssuer.deliveryCity; }) };
        issuerRepository = { findByCDcodeToIssuerInvoicy: jest.fn(() => { return parameterToIssuer.issuer; }) };
        shippingCompanyRepository = { findByCodeFreightToIssuer: jest.fn(() => { return parameterToIssuer.shippingCompany; }) };
        clientRepository = { findByClientIdToIssuer: jest.fn(() => { return parameterToIssuer.client; }) };
        service = new nfesale_service_1.NFeSaleService(repositoryNFe, orderRepository, issuer, deliveryCityRepository, issuerRepository, shippingCompanyRepository, clientRepository);
    });
    describe('NFeSalesService', () => {
        it('service is defined', () => {
            expect(service).toBeDefined();
        });
        test('should not return throw', () => {
            expect(service.issueSalesInvoicy("")).resolves.not.toThrow();
        });
        test('returns throw if we have already issued the invoicy', () => {
            const repositoryNFeThrow = {
                alreadyContainsNfeIssued: jest.fn(() => { return true; }),
                getNumber: jest.fn(() => { return 10; })
            };
            const serviceThrow = new nfesale_service_1.NFeSaleService(repositoryNFeThrow, orderRepository, issuer, deliveryCityRepository, issuerRepository, shippingCompanyRepository, clientRepository);
            expect(serviceThrow.issueSalesInvoicy("")).rejects.toThrow();
        });
        test('returns parameter to emission', () => {
            expect(service.getInformationOrderToInvoicy("")).toStrictEqual(parameterToIssuer);
        });
    });
});
//# sourceMappingURL=nfesale.service.test.js.map
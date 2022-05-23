import {NFeSaleService} from "../services/nfesale.service";
import {ClientInterfaceRepository} from "../shared/client.interface.repository";
import {DeliveryCityInterfaceRepository} from "../shared/deliveryCity.interface.repository";
import {IssuerInterface} from "../shared/issuer.interface";
import {IssuerInterfaceRepository} from "../shared/issuer.interface.repository";
import {NFeInterfaceRepository} from "../shared/nfe.interface.repository";
import {OrderInterfaceRepository} from "../shared/order.interface.repository";
import {CD, Client, DeliveryCity, Order, ParametersToIssuer, ShippingCompany} from "../shared/parametersToIssuer.interface";
import {ShippingCompanyInterfaceRepository} from "../shared/shippingCompany.interface.repository";
import {ParameterToIssueStub} from "./ParametersToIssueStub";

describe('NFeSaleService', () => {
	let service: NFeSaleService;
	let repositoryNFe: NFeInterfaceRepository;
	let orderRepository: OrderInterfaceRepository;
	let issuer: IssuerInterface;
	let parameterToIssuer:  ParametersToIssuer;
	let deliveryCityRepository : DeliveryCityInterfaceRepository;
	let issuerRepository : IssuerInterfaceRepository;
	let shippingCompanyRepository : ShippingCompanyInterfaceRepository;
	let clientRepository : ClientInterfaceRepository; 

	beforeEach(async () => {
		parameterToIssuer = ParameterToIssueStub.get(); 
		repositoryNFe = {
			alreadyContainsNfeIssued : jest.fn(() => { return false }),
			getNumber : jest.fn(() => { return 10 })
		};

		orderRepository = {
			findOrderToIssuerById : jest.fn(() => { return parameterToIssuer.order as Order }),
			getItemsOfTheOrderToIssuer : jest.fn(() => { return parameterToIssuer.items })
		};

		issuer = {sendInvoicy : jest.fn(() => { return new Promise(function(){}) })};

		deliveryCityRepository = { findDeliveryCityToIssuer : jest.fn(() => { return parameterToIssuer.deliveryCity as DeliveryCity }) };
	    issuerRepository = { findByCDcodeToIssuerInvoicy : jest.fn(() => { return parameterToIssuer.issuer as CD }) };
	    shippingCompanyRepository = { findByCodeFreightToIssuer : jest.fn(() => { return parameterToIssuer.shippingCompany as ShippingCompany }) };
		clientRepository = { findByClientIdToIssuer : jest.fn(() => { return parameterToIssuer.client as Client }) }; 

		service = new NFeSaleService(repositoryNFe, orderRepository, issuer, deliveryCityRepository, issuerRepository, shippingCompanyRepository, clientRepository);
	});

	describe('NFeSalesService', () => {
		test('service is defined', () => {
			expect(service).toBeDefined();
		});

		test('should not return throw', () => {
			expect(service.issueSalesInvoicy("")).resolves.not.toThrow();
		}); 

		test('returns throw if we have already issued the invoicy', () => {
			const repositoryNFeThrow: NFeInterfaceRepository = { 
				alreadyContainsNfeIssued : jest.fn(() => { return true }), 
				getNumber : jest.fn(() => { return 10 })
			};
			const serviceThrow = new NFeSaleService(repositoryNFeThrow, orderRepository, issuer, deliveryCityRepository, issuerRepository, shippingCompanyRepository, clientRepository);
			expect(serviceThrow.issueSalesInvoicy("")).rejects.toThrow();
		}); 

		test('returns parameter to emission', () => {
			expect(service.getInformationOrderToInvoicy("")).toStrictEqual(parameterToIssuer as ParametersToIssuer);
		});
	});
});

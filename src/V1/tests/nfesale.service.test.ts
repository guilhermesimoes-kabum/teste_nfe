import {NFeSaleService} from "src/V1/services/nfesale.service";
import {EmissionInterface} from "../shared/emission.interface";
import {NFeInterfaceRepository} from "../shared/nfe.interface.repository";
import {OrderDTO} from "../shared/order.dto";
import {OrderInterfaceRepository} from "../shared/order.interface.repository";
import {ParametersToEmission} from "../shared/parametesToEmission.interface";
import {ParameterToEmissionStub} from "./ParametersToEmissionStub";

describe('NFeSaleService', () => {
	let service: NFeSaleService;
	let repositoryNFe: NFeInterfaceRepository;
	let orderRepository: OrderInterfaceRepository;
	let emissior: EmissionInterface;
	let parameterToEmission:  ParametersToEmission;

	beforeEach(async () => {
		repositoryNFe = {alreadyContainsNfeIssued : jest.fn(() => { return false })};
		orderRepository = {findById : jest.fn(() => { return new OrderDTO })};
		emissior = {sendInvoicy : jest.fn(() => { return new Promise(function(){}) })};

		parameterToEmission = ParameterToEmissionStub.get(); 
		service = new NFeSaleService(repositoryNFe, orderRepository, emissior);
	});

	describe('NFeSalesService', () => {
		it('service is defined', () => {
			expect(service).toBeDefined();
		});

		test('should not return throw', () => {
			expect(service.issueSalesInvoicy("")).resolves.not.toThrow();
		})

		test('returns throw if we have already issued the invoicy', () => {
			const repositoryNFeThrow: NFeInterfaceRepository = { alreadyContainsNfeIssued : jest.fn(() => { return true })};
			const serviceThrow = new NFeSaleService(repositoryNFeThrow, orderRepository, emissior);
			expect(serviceThrow.issueSalesInvoicy("")).resolves.toThrow();
		})

		test('returns parameter to emission', () => {
			expect(service.getInformationOrderToInvoicy("")).toBe(parameterToEmission);
		});
	});

});

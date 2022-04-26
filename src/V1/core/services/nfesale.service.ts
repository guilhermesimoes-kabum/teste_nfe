import {ResponseIssuer} from "../adapter/responseIssuer";
import {ClientInterfaceRepository} from "../shared/client.interface.repository";
import {DeliveryCityInterfaceRepository} from "../shared/deliveryCity.interface.repository";
import {IssuerInterface} from "../shared/issuer.interface";
import {IssuerInterfaceRepository} from "../shared/issuer.interface.repository";
import {NFeInterfaceRepository} from "../shared/nfe.interface.repository";
import {OrderInterfaceRepository} from "../shared/order.interface.repository";
import {ParametersToIssuer} from "../shared/parametersToIssuer.interface";
import {ShippingCompanyInterfaceRepository} from "../shared/shippingCompany.interface.repository";

export class NFeSaleService {
	constructor(
		private nfeRepository: NFeInterfaceRepository, 
		private orderRepository: OrderInterfaceRepository, 
		private issuer : IssuerInterface,
		private deliveryCityRepository : DeliveryCityInterfaceRepository,
		private issuerRepository : IssuerInterfaceRepository,
		private shippingCompanyRepository : ShippingCompanyInterfaceRepository,
		private clientRepository : ClientInterfaceRepository
	) {}

	async issueSalesInvoicy(idOrder: string) : Promise<ResponseIssuer> {
		const informationOrderToInvoicy = this.getInformationOrderToInvoicy(idOrder);
		return this.issuer.sendInvoicy();
	}

	getInformationOrderToInvoicy(idOrder: string) : ParametersToIssuer {
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
			order, deliveryCity, issuer, shippingCompany, client,  items, nNF, serie, debug, typeOperation 
		} as ParametersToIssuer;

		return parameterToEmission;
	}

	checkIfAlreadyExistsInvoicyIssued(orderCode: Number) {
		const alreadyContainsNfeIssued = this.nfeRepository.alreadyContainsNfeIssued(orderCode);
		if(alreadyContainsNfeIssued) {
			throw new Error;
		}
	}
}

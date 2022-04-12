import {ResponseEmission} from "../adapter/responseEmission";
import {IssuerInterface} from "../shared/emission.interface";
import {NFeInterfaceRepository} from "../shared/nfe.interface.repository";
import {OrderInterfaceRepository} from "../shared/order.interface.repository";

export class NFeSaleService {
	constructor(
		private repositoryNFe: NFeInterfaceRepository, 
		private orderRepository: OrderInterfaceRepository, 
		private issuer : IssuerInterface 
	) {}

	async issueSalesInvoicy(idOrder: string) : Promise<ResponseEmission> {
		const informationOrderToInvoicy = this.getInformationOrderToInvoicy(idOrder);
		return this.issuer.sendInvoicy();
	}

	getInformationOrderToInvoicy(idOrder: string) : ParametersToIssuer {
		const order = this.orderRepository.findOrderToIssuerById(idOrder);
		this.checkIfAlreadyExistsInvoicyIssued(order);
		const deliveryCity = this.;

		const parameterToEmission = {
			order, 
		} as ParametersToIssuer;

		return parameterToEmission;
	}

	checkIfAlreadyExistsInvoicyIssued(order: Order) {
		const alreadyContainsNfeIssued = this.repositoryNFe.alreadyContainsNfeIssued(order.codigo);
		if(alreadyContainsNfeIssued) {
			throw new Error;
		}
	}
}

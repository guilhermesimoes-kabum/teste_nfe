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

		if(already_contains_nfe_issued) {
			throw new Error;	
		}

		return this.emissor.sendInvoicy();
	}
}

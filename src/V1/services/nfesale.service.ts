import {ResponseEmission} from "../adapter/responseEmission";
import {EmissionInterface} from "../shared/emission.interface";
import {NFeInterfaceRepository} from "../shared/nfe.interface.repository";
import {OrderInterfaceRepository} from "../shared/order.interface.repository";

export class NFeSaleService {
	constructor(
		private repository_nfe: NFeInterfaceRepository, 
		private repository_pedido: OrderInterfaceRepository, 
		private emissor : EmissionInterface 
	) {}

	async issueSalesInvoicy(id_pedido: string) : Promise<ResponseEmission> {
		const order = this.repository_pedido.findById(id_pedido);
		const already_contains_nfe_issued = this.repository_nfe.alreadyContainsNfeIssued(order.codigo);

		if(already_contains_nfe_issued) {
			throw new Error;	
		}

		return this.emissor.sendInvoicy();
	}
}

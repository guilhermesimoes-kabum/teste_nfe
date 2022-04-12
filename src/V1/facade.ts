import {ResponseEmission} from "./adapter/responseEmission";
import {Invoicy} from "./invoicy/invoicy";
import {NFeSaleRepository} from "./repositories/nfesale.repository";
import {OrderRepository} from "./repositories/order.repository";
import {NFeSaleService} from "./services/nfesale.service";

export class Facade {
	private nfe_repository : NFeSaleRepository;
	private pedido_repository : OrderRepository;
	private emissor : Invoicy;
	constructor() {
		this.nfe_repository = new NFeSaleRepository();
		this.pedido_repository = new OrderRepository();
		this.emissor = new Invoicy();
	}
	
	issueSalesInvoicy(id_pedido: string) : Promise<ResponseEmission>{
		const service = new NFeSaleService(this.nfe_repository, this.pedido_repository, this.emissor);
		return service.issueSalesInvoicy(id_pedido);
	}
}

import {ResponseIssuer} from "./adapter/responseIssuer";
import {Invoicy} from "./invoicy/invoicy";
import {ClientRepository} from "./repositories/client.repository";
import {DeliveryCityRepository} from "./repositories/deliveryCity.repository";
import {IssuerRepository} from "./repositories/issuer.repository";
import {NFeSaleRepository} from "./repositories/nfesale.repository";
import {OrderRepository} from "./repositories/order.repository";
import {ShippingCompanyRepository} from "./repositories/shippingCompany.repository";
import {NFeSaleService} from "./services/nfesale.service";

export class Facade {
	private nfeRepository : NFeSaleRepository;
	private orderRepository : OrderRepository;
	private issuer : Invoicy;
	private deliveryCityRepository : DeliveryCityRepository;
	private issuerRepository : IssuerRepository;
	private shippingCompanyRepository : ShippingCompanyRepository;
	private clientRepository : ClientRepository;

	constructor() {
		this.nfeRepository = new NFeSaleRepository();
		this.orderRepository = new OrderRepository();
		this.issuer = new Invoicy();
	}

	issueSalesInvoicy(id_pedido: string) : Promise<ResponseIssuer>{
		const service = new NFeSaleService(
			this.nfeRepository, this.orderRepository, this.issuer, this.deliveryCityRepository,
			this.issuerRepository, this.shippingCompanyRepository, this.clientRepository
		);
		return service.issueSalesInvoicy(id_pedido);
	}
}

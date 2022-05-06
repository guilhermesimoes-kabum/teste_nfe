import { ResponseIssuer } from "../adapter/responseIssuer";
import { ClientInterfaceRepository } from "../shared/client.interface.repository";
import { DeliveryCityInterfaceRepository } from "../shared/deliveryCity.interface.repository";
import { IssuerInterface } from "../shared/issuer.interface";
import { IssuerInterfaceRepository } from "../shared/issuer.interface.repository";
import { NFeInterfaceRepository } from "../shared/nfe.interface.repository";
import { OrderInterfaceRepository } from "../shared/order.interface.repository";
import { ParametersToIssuer } from "../shared/parametersToIssuer.interface";
import { ShippingCompanyInterfaceRepository } from "../shared/shippingCompany.interface.repository";
export declare class NFeSaleService {
    private nfeRepository;
    private orderRepository;
    private issuer;
    private deliveryCityRepository;
    private issuerRepository;
    private shippingCompanyRepository;
    private clientRepository;
    constructor(nfeRepository: NFeInterfaceRepository, orderRepository: OrderInterfaceRepository, issuer: IssuerInterface, deliveryCityRepository: DeliveryCityInterfaceRepository, issuerRepository: IssuerInterfaceRepository, shippingCompanyRepository: ShippingCompanyInterfaceRepository, clientRepository: ClientInterfaceRepository);
    issueSalesInvoicy(idOrder: string): Promise<ResponseIssuer>;
    getInformationOrderToInvoicy(idOrder: string): ParametersToIssuer;
    checkIfAlreadyExistsInvoicyIssued(orderCode: Number): void;
}

import { ResponseIssuer } from "./adapter/responseIssuer";
export declare class Facade {
    private nfeRepository;
    private orderRepository;
    private issuer;
    private deliveryCityRepository;
    private issuerRepository;
    private shippingCompanyRepository;
    private clientRepository;
    constructor();
    issueSalesInvoicy(id_pedido: string): Promise<ResponseIssuer>;
}

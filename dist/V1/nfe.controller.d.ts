import { ResponseIssuer } from "./adapter/responseIssuer";
export declare class NFeController {
    private facade;
    constructor();
    issueSalesInvoicy(id_pedido: string): Promise<ResponseIssuer>;
}

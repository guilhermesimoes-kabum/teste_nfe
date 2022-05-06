import { ResponseIssuer } from "../adapter/responseIssuer";
import { IssuerInterface } from "../shared/issuer.interface";
export declare class Invoicy implements IssuerInterface {
    sendInvoicy(): Promise<ResponseIssuer>;
}

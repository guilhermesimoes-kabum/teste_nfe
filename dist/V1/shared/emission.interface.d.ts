import { ResponseIssuer } from "../adapter/responseEmission";
export interface IssuerInterface {
    sendInvoicy(): Promise<ResponseIssuer>;
}

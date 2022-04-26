import {ResponseIssuer} from "../adapter/responseIssuer";

export interface IssuerInterface {
	sendInvoicy() : Promise<ResponseIssuer>;
}

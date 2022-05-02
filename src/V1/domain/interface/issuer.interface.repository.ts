import {CD} from "./parametersToIssuer.interface";

export interface IssuerInterfaceRepository {
	findByCDcodeToIssuerInvoicy(estado: String, cd_codigo: Number) : CD;
}

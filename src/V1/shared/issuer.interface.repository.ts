import {CD} from "./parametesToEmission.interface";

export interface IssuerInterfaceRepository {
	findByCDcodeToIssuerInvoicy(estado: String, cd_codigo: Number) : CD;
}

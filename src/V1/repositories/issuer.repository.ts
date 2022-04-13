import {IssuerInterfaceRepository} from "../shared/issuer.interface.repository";
import {CD} from "../shared/parametersToIssuer.interface";

export class IssuerRepository implements IssuerInterfaceRepository {
	findByCDcodeToIssuerInvoicy(estado: String, cd_codigo: Number): CD {
		return {} as CD;
	}
}

import {ResponseIssuer} from "../adapter/responseIssuer";
import {NFE} from "../domain/entities/SEFAZ/NFE";
import {TaxationInterface} from "../domain/interface/TaxationInterface";
import {IssuerInterface} from "../shared/issuer.interface";
import {ParametersToIssuer} from "../shared/parametersToIssuer.interface";

export class NFeSaleService {
	constructor(
		private issuer : IssuerInterface,
		private taxation : TaxationInterface
	) {}

	async issueSalesInvoicy(informationOrderToInvoicy : ParametersToIssuer) : Promise<ResponseIssuer> {
		const nfe = new NFE(informationOrderToInvoicy);
		return this.issuer.sendInvoicy();
	}
}

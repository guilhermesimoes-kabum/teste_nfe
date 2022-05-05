import {ResponseIssuer} from "../adapter/responseIssuer";
import {NFE} from "../domain/entities/SEFAZ/NFE";
import {typeTaxation} from "../domain/interface/parametersToIssuer.interface";
import {TaxationInterface} from "../domain/interface/TaxationInterface";
import {TaxationIssuerKabumOrder} from "../infra/repositories/taxationIssuerKabumOrder";
import {IssuerInterface} from "../shared/issuer.interface";
import {ParametersToIssuer} from "../shared/parametersToIssuer.interface";

export class NFeSaleService {
	constructor(
		private issuer : IssuerInterface
	) {}

	async issueSalesInvoicy(informationOrderToInvoice : ParametersToIssuer) : Promise<ResponseIssuer> {
		let taxObj = informationOrderToInvoice.taxation;
		if(taxObj == null) {
			const tax = informationOrderToInvoice.typeTaxation;
			if(tax == null) {
				throw new Error();
			}
			taxObj = this.getTaxObj(tax);
		}

		const nfe = new NFE(informationOrderToInvoice, taxObj);
		return this.issuer.sendInvoicy(nfe);
	}

	getTaxObj(tax : typeTaxation) : TaxationInterface {
		if(tax == 0) {
			return new TaxationIssuerKabumOrder() 
		}
	}
}

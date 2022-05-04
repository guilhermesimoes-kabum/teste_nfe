import {InvoicyAdapter} from "src/V1/domain/adapter/invoicyAdapter";
import {NFE} from "src/V1/domain/entities/SEFAZ/NFE";
import {ResponseIssuer} from "../adapter/responseIssuer";
import {IssuerInterface} from "../shared/issuer.interface";
import {ResponseInvoicyStub} from "./responseInvoicyStub";

export class Invoicy implements IssuerInterface {
	async sendInvoicy(invoice : NFE): Promise<ResponseIssuer> {

		const responseAdapter = new InvoicyAdapter();
		const invoiceInvoicy = responseAdapter.input(invoice);

		const responseInvoicy = ResponseInvoicyStub.respota();
		const response = responseAdapter.output(responseInvoicy);

		return new Promise(function (resolve){ 
			resolve(response);
		});
	}
}

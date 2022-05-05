import {InvoicyAdapter} from "src/V1/domain/adapter/invoicyAdapter";
import {NFE} from "src/V1/domain/entities/SEFAZ/NFE";
import {ResponseIssuer} from "../adapter/responseIssuer";
import {IssuerInterface} from "../shared/issuer.interface";
import {InvoiceInvoicy} from "./invoiceInvoicy";
import {InvoicyResponse} from "./InvoicyResponse";
import {ResponseInvoicyStub} from "./responseInvoicyStub";

export class Invoicy implements IssuerInterface {
	async sendInvoicy(invoice : NFE): Promise<ResponseIssuer> {

		const responseAdapter = new InvoicyAdapter();
		const invoiceInvoicy = responseAdapter.input(invoice);

		const responseInvoicy = this.sendDocument(invoiceInvoicy);
		const response = responseAdapter.output(responseInvoicy);

		return new Promise(function (resolve){ 
			resolve(response);
		});
	}

	sendDocument(invoiceInvoicy : InvoiceInvoicy) : InvoicyResponse {
		return ResponseInvoicyStub.respota();
	}

	getToken() : string {
		return "Bearer 111111";
	}

	generateToken() {

	}
}

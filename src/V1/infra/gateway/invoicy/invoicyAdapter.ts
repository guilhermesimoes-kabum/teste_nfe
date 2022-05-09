import {NFE} from "../entities/SEFAZ/NFE";
import {ResponseIssuer} from "../shared/responseIssuer";
import {InvoiceInvoicy} from "./invoiceInvoicy";
import {InvoicyResponse} from "./InvoicyResponse";

export class InvoicyAdapter {

	output(invoicyResponse : InvoicyResponse) : ResponseIssuer {
		//ever translate status code to exceptions ....  
		if(invoicyResponse.Situacao.SitCodigo != 100 && invoicyResponse.Situacao.SitCodigo != 135) {
			this.fixCodeReturn(invoicyResponse.Situacao.SitCodigo);
		}

		return {
			xml_link : invoicyResponse.DocXMLDownload,
			pdf_link : invoicyResponse.DocPDFDownload,
			xml_base64 : invoicyResponse.DocXMLBase64,	
			pdf_base64 : invoicyResponse.DocPDFBase64,	
			statusCode : invoicyResponse.Situacao.SitCodigo,
			mensagem : invoicyResponse.Situacao.SitDescricao
		};
	}

	input(invoice : NFE) : InvoiceInvoicy {
		return {
			ide : {
				cUF_ide : invoice.ide.cUF,
				cNF_ide : invoice.ide.cNF,
				natOp_ide : invoice.ide.natOp,
				indPag_ide : invoice.ide.indPag,
				mod_ide : invoice.ide.mod,
				serie_ide : invoice.ide.serie,
				nNF_ide : invoice.ide.nNF,
				dhEmi_ide : invoice.ide.dhEmi,
				dhSaiEnt_ide : invoice.ide.dhSaiEnt,
				tpNF_ide : invoice.ide.tpNF,
				idDest_ide : invoice.ide.idDest,
				cMunFG_ide : invoice.ide.cMunFG,
				tpImp_ide : invoice.ide.tpImp,
				tpEmis_ide : invoice.ide.tpEmis,
				cDV_ide : invoice.ide.cDV,
				tpAmb_ide : invoice.ide.tpAmb,
				finNFe_ide : invoice.ide.finNFe,
				indFinal_ide : invoice.ide.indFinal,
				indPres_ide : invoice.ide.indPres,
				procEmi_ide : invoice.ide.procEmi,
				verProc_ide : invoice.ide.verProc
			}
		}
	}

	fixCodeReturn(code : number) {
		const objCodes = {
			102 : new Error(),
			105 : new Error("Pending document"),
			106 : new Error("Not included in the SEFAZ database"),
			108 : new Error("Contingency"),
			112: new Error("Rejected"),
			113: new Error("Temporary"),
			539: new Error("Duplicated"),
			500 : new Error("Unknown error")
		}

		const exception = objCodes[code] || objCodes[500];
		throw exception;
	}
}

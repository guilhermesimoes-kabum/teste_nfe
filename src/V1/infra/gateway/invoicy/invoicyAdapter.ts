import {NFE} from "../entities/SEFAZ/NFE";
import {ResponseIssuer} from "../shared/responseIssuer";
import {InvoiceInvoicy} from "./invoiceInvoicy";
import {InvoicyResponse} from "./InvoicyResponse";

export class InvoicyAdapter {

	output(invoicyResponse : InvoicyResponse) : ResponseIssuer {
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
}

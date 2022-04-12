import {ResponseEmission} from "../adapter/responseEmission";
import {EmissionInterface} from "../shared/emission.interface";
import {ResponseInvoicyStub} from "./responseInvoicyStub";

export class Invoicy implements EmissionInterface {
	async sendInvoicy(): Promise<ResponseEmission> {
		const resposta_invoicy = ResponseInvoicyStub.respota();	
		const resposta = new ResponseEmission(); 
		resposta.xml_link = resposta_invoicy[0].DocXMLDownload;
		resposta.pdf_link = resposta_invoicy[0].DocPDFDownload;
		resposta.xml_base64 = resposta_invoicy[0].DocXMLBase64;
		resposta.pdf_base64 = resposta_invoicy[0].DocXMLBase64;
		resposta.statusCode = resposta_invoicy[0].Situacao.SitCodigo;
		resposta.mensagem = resposta_invoicy[0].Situacao.SitDescricao;

		return new Promise(function (resolve){ 
			resolve(resposta);
		});
	}
}

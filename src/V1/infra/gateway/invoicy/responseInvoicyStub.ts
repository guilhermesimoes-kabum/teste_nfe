import {InvoicyResponse} from "src/V1/domain/adapter/InvoicyResponse";

export class ResponseInvoicyStub {
	static respota() : InvoicyResponse {
		return {
				"DocModelo": "NFCe",
				"DocNumero": 2019,
				"DocSerie": 260,
				"DocChaAcesso": "43210206354976000149652600000020191001271973",
				"DocProtocolo": "143210000088546",
				"DocEvenSeq": 0,
				"DocEveTp": 0,
				"DocEveId": 0,
				"DocPDFBase64": "",
				"DocPDFDownload": "https://homolog.invoicy.com.br///DownloadPDF.aspx?gvjBbcQmIWIxjpfkKLR/N1/1Tw5AtW26EMMuyoXOe8w=",
				"DocDhAut": "2021-02-23T09:18:27-03:00",
				"DocDigestValue": "8IyZ7d68/MXkJtMCvRJpEQtlXkI=",
				"DocXMLBase64": "",
				"DocXMLDownload": "https://homolog.invoicy.com.br///HNUC002.aspx?gvjBbcQmIWIxjpfkKLR/NxZJw95HgnHfd+/xEdFubtA=",
				"DocImpressora": "",
				"Situacao": {
				  "SitCodigo": 100,
				  "SitDescricao": "Autorizado o uso da NF-e"
				},
				"MensagemSefaz": {
				  "CodMsg": 0,
				  "DscMsg": ""
				},
				"NFSe": {
				  "NFSeNumero": 0,
				  "NFSeCodVerificacao": "",
				  "NFSeDataEmissao": ""
				},
				"DocImpPrefeitura": "",
				"DocCompleto": ""
			}
	}	
}

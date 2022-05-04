export interface InvoicyResponse {
		"DocModelo": string,
		"DocNumero": number,
		"DocSerie": number,
		"DocChaAcesso": string,
		"DocProtocolo": string,
		"DocEvenSeq": number,
		"DocEveTp": number,
		"DocEveId": number,
		"DocPDFBase64": string,
		"DocPDFDownload": string,
		"DocDhAut": string,
		"DocDigestValue": string,
		"DocXMLBase64": string,
		"DocXMLDownload": string,
		"DocImpressora": string,
		"Situacao": {
		  "SitCodigo": number,
		  "SitDescricao": string 
		},
		"MensagemSefaz": {
		  "CodMsg": number,
		  "DscMsg": string 
		},
		"NFSe": {
		  "NFSeNumero": number,
		  "NFSeCodVerificacao": string,
		  "NFSeDataEmissao": string
		},
		"DocImpPrefeitura": string,
		"DocCompleto": string 
}

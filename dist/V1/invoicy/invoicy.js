"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoicy = void 0;
const responseIssuer_1 = require("../adapter/responseIssuer");
const responseInvoicyStub_1 = require("./responseInvoicyStub");
class Invoicy {
    async sendInvoicy() {
        const resposta_invoicy = responseInvoicyStub_1.ResponseInvoicyStub.respota();
        const resposta = new responseIssuer_1.ResponseIssuer();
        resposta.xml_link = resposta_invoicy[0].DocXMLDownload;
        resposta.pdf_link = resposta_invoicy[0].DocPDFDownload;
        resposta.xml_base64 = resposta_invoicy[0].DocXMLBase64;
        resposta.pdf_base64 = resposta_invoicy[0].DocXMLBase64;
        resposta.statusCode = resposta_invoicy[0].Situacao.SitCodigo;
        resposta.mensagem = resposta_invoicy[0].Situacao.SitDescricao;
        return new Promise(function (resolve) {
            resolve(resposta);
        });
    }
}
exports.Invoicy = Invoicy;
//# sourceMappingURL=invoicy.js.map
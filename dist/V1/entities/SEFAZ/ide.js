"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ide = void 0;
const helper_1 = require("../../shared/helper");
class ide {
    constructor(parameterToIssuer) {
        this.parameterToIssuer = parameterToIssuer;
        this.buildIDE();
    }
    buildIDE() {
        this.cUF = helper_1.Helper.getCodeState(this.parameterToIssuer.issuer.UF);
        this.cNF = Math.random() * (99999999 - 0) + 0;
        this.natOp = helper_1.Helper.getNatOp(this.parameterToIssuer.client.cliente_pessoa);
        this.indPag = this.parameterToIssuer.order.pagamento_parcelamento > 1 ? 1 : 0;
        this.mod = helper_1.Helper.DOCUMENT_TEMPLATE;
        this.serie = this.parameterToIssuer.serie;
        this.nNF = this.parameterToIssuer.nNF;
        this.dhEmi = this.dateFormat(new Date());
        this.tpNF = this.parameterToIssuer.typeOperation;
        const saleWithinTheState = this.parameterToIssuer.issuer.UF == this.parameterToIssuer.deliveryCity.estado;
        this.idDest = saleWithinTheState ? 1 : 2;
        this.cMunFG = this.parameterToIssuer.issuer.MUNICIPIO_CODIGO;
        this.tpImp = helper_1.Helper.PORTRAIT_MODE_DANFE;
        this.tpEmis = helper_1.Helper.NORMAL_ISSUE;
        this.tpAmb = this.parameterToIssuer.debug ? 2 : 1;
        this.cDV = helper_1.Helper.KEY_CHECKER_TYPE;
        this.finNFe = helper_1.Helper.NORMAL_PURPOSE;
        this.indFinal = helper_1.Helper.SALE_TO_END_CONSUMER;
        this.indPres = helper_1.Helper.NON_FACETOFACE_OPERATION_OVER_THE_INTERNET;
        this.procEmi = helper_1.Helper.ISSUANCE_PROCESS;
        this.verProc = helper_1.Helper.VERSION_OF_THE_ISSUANCE_PROCESS;
    }
    dateFormat(now) {
        const isoStrDate = now.toISOString();
        let strDateFormat = isoStrDate.split(".")[0];
        strDateFormat += "-03:00";
        return strDateFormat;
    }
}
exports.ide = ide;
//# sourceMappingURL=ide.js.map
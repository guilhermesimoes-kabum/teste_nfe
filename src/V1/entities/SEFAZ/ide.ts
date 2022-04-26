import {Helper} from "../../shared/helper";
import {ParametersToIssuer} from "src/V1/shared/parametersToIssuer.interface";

export class ide {

	constructor(
		private parameterToIssuer : ParametersToIssuer
	){
		this.buildIDE();
	}

	cUF      : Number;
    cNF      : Number;
    natOp 	 : String;
    indPag 	 : Number;
    mod 	 : Number;
    serie 	 : Number;
    nNF 	 : Number;
    dhEmi 	 : String;
    dhSaiEnt?: String;
    tpNF 	 : Number;
    idDest 	 : Number;
    cMunFG 	 : Number;
    tpImp 	 : Number;
    tpEmis 	 : Number;
    cDV 	 : Number;
    tpAmb 	 : Number;
    finNFe 	 : Number;
    indFinal : Number;
    indPres  : Number;
    procEmi  : Number;
    verProc  : String;

	buildIDE() {
		this.cUF = Helper.getCodeState(this.parameterToIssuer.issuer.UF);
		this.cNF = Math.random() * (99999999  - 0) + 0;
		this.natOp = Helper.getNatOp(this.parameterToIssuer.client.cliente_pessoa);
		this.indPag = this.parameterToIssuer.order.pagamento_parcelamento > 1 ? 1 : 0;
		this.mod = Helper.DOCUMENT_TEMPLATE;
		this.serie = this.parameterToIssuer.serie;
		this.nNF = this.parameterToIssuer.nNF;
		this.dhEmi = this.currentDate();
		this.tpNF = this.parameterToIssuer.type_invoicy;

		const saleWithinTheState = this.parameterToIssuer.issuer.UF == this.parameterToIssuer.deliveryCity.estado; 

		this.idDest = saleWithinTheState ? 1 : 2; 
		this.cMunFG = this.parameterToIssuer.issuer.MUNICIPIO_CODIGO;
		this.tpImp = Helper.PORTRAIT_MODE_DANFE;
		this.tpEmis = Helper.NORMAL_ISSUE;
		this.tpAmb = this.parameterToIssuer.debug ? 2 : 1;
		this.cDV = Helper.KEY_CHECKER_TYPE;
		this.finNFe = Helper.NORMAL_PURPOSE;
		this.indFinal = Helper.SALE_TO_END_CONSUMER;
		this.indPres = Helper.NON_FACETOFACE_OPERATION_OVER_THE_INTERNET;
		this.procEmi = Helper.ISSUANCE_PROCESS;
		this.verProc = Helper.VERSION_OF_THE_ISSUANCE_PROCESS;
	}

	currentDate() : String {
		const now = new Date();
		const isoStrDate = now.toISOString();
		let strDateFormat = isoStrDate.split(".")[0];
		strDateFormat += "-03:00";
		return strDateFormat;
	}
}

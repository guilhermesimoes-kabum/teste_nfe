import {Helper} from "../../shared/helper";
import {ParametersToIssuer} from "src/V1/shared/parametersToIssuer.interface";
import {cUF} from "./cUF";
import {cNF} from "./cNF";
import {natOp} from "./natOp";
import {indPag} from "./indPag";
import {mod} from "./mod";
import {serie} from "./serie";
import {nNF} from "./nNF";
import {dhEmi} from "./dhEmi";
import {tpNF} from "./tpNF";
import {idDest} from "./idDest";
import {cMunFG} from "./cMunFG";
import {tpImp} from "./tpImp";
import {tpEmis} from "./tpEmis";
import {cDV} from "./cDV";
import {tpAmb} from "./tpAmb";
import {finNFe} from "./finNFe";
import {indFinal} from "./indFinal";
import {indPres} from "./indPres";
import {procEmi} from "./procEmi";
import {verProc} from "./verProc";
import {dhSaiEnt} from "./dhSaiEnt";

export class ide {

	constructor(
		private parameterToIssuer : ParametersToIssuer
	){
		this.buildIDE();
	}

	public cUF : cUF;
    public cNF : cNF;
    public natOp : natOp;
    public indPag : indPag;
    public mod : mod;
    public serie : serie;
    public nNF : nNF;
    public dhEmi : dhEmi;
    public dhSaiEnt?: dhSaiEnt;
    public tpNF : tpNF;
    public idDest : idDest;
    public cMunFG : cMunFG;
    public tpImp : tpImp;
    public tpEmis : tpEmis;
    public cDV : cDV;
    public tpAmb : tpAmb;
    public finNFe : finNFe;
    public indFinal : indFinal;
    public indPres : indPres;
    public procEmi : procEmi;
    public verProc : verProc;

	buildIDE() {
		this.cUF = new cUF(Helper.getCodeState(this.parameterToIssuer.issuer.UF));
		this.cNF = new cNF(Math.random() * (99999999  - 0) + 0);
		this.natOp = new natOp(Helper.getNatOp(this.parameterToIssuer.client.cliente_pessoa));
		this.indPag = new indPag(this.parameterToIssuer.order.pagamento_parcelamento > 1 ? 1 : 0);
		this.mod = new mod(Helper.DOCUMENT_TEMPLATE);
		this.serie = new serie(this.parameterToIssuer.serie);
		this.nNF = new nNF(this.parameterToIssuer.nNF);
		this.dhEmi = new dhEmi(this.dateFormat(new Date()));
		this.tpNF = new tpNF(this.parameterToIssuer.typeOperation);

		const saleWithinTheState = this.parameterToIssuer.issuer.UF == this.parameterToIssuer.deliveryCity.estado;

		this.idDest = new idDest(saleWithinTheState ? 1 : 2); 
		this.cMunFG = new cMunFG(this.parameterToIssuer.issuer.MUNICIPIO_CODIGO);
		this.tpImp = new tpImp(Helper.PORTRAIT_MODE_DANFE);
		this.tpEmis = Helper.NORMAL_ISSUE;
		this.tpAmb = new tpAmb(this.parameterToIssuer.debug);
		this.cDV = new cDV(Helper.KEY_CHECKER_TYPE);
		this.finNFe = new finNFe(Helper.NORMAL_PURPOSE);
		this.indFinal = new indFinal(Helper.SALE_TO_END_CONSUMER);
		this.indPres = new indPres(Helper.NON_FACETOFACE_OPERATION_OVER_THE_INTERNET);
		this.procEmi = new procEmi(Helper.ISSUANCE_PROCESS);
		this.verProc = new verProc(Helper.VERSION_OF_THE_ISSUANCE_PROCESS);
	}

	dateFormat(now : Date) : String {
		const isoStrDate = now.toISOString();
		let strDateFormat = isoStrDate.split(".")[0];
		strDateFormat += "-03:00";
		return strDateFormat;
	}
}

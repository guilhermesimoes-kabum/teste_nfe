import {Helper} from "../../shared/helper";
import {ParametersToIssuer} from "src/V1/shared/parametersToIssuer.interface";
import {cUF} from "./cUF";
import {cNF} from "./cNF";
import {natOp} from "./natOp";
import {indPag} from "./indPag";
import {mod} from "./mod";
import {serie} from "./serie";
import {nNF} from "./nNF";
import {dateType} from "./date";
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

	public cUF : number;
    public cNF :number;
    public natOp : string;
    public indPag : number;
    public mod : number;
    public serie : number;
    public nNF :number;
    public dhEmi : string;
    public dhSaiEnt?: string;
    public tpNF : number;
    public idDest : number;
    public cMunFG : number;
    public tpImp : number;
    public tpEmis : number;
    public cDV : number;
    public tpAmb : number;
    public finNFe : number;
    public indFinal : number;
    public indPres : number;
    public procEmi : number;
    public verProc : string;

	buildIDE() {
		this.cUF = cUF.get(Helper.getCodeState(this.parameterToIssuer.issuer.UF));
		this.cNF = cNF.get(Math.random() * (99999999  - 0) + 0);
		this.natOp = natOp.get(Helper.getNatOp(this.parameterToIssuer.client.cliente_pessoa));
		this.indPag = indPag.get(this.parameterToIssuer.order.pagamento_parcelamento > 1 ? 1 : 0);
		this.mod = mod.get(Helper.DOCUMENT_TEMPLATE);
		this.serie = serie.get(this.parameterToIssuer.serie);
		this.nNF = nNF.get(this.parameterToIssuer.nNF);
		this.dhEmi = dateType.get(this.dateFormat(new Date()));
		this.tpNF = tpNF.get(this.parameterToIssuer.typeOperation);

		const saleWithinTheState = this.parameterToIssuer.issuer.UF == this.parameterToIssuer.deliveryCity.estado;
		const exteriorSale = this.parameterToIssuer.deliveryCity.estado = 'EX';

		this.idDest = idDest.get(exteriorSale ? 3 : saleWithinTheState ? 1 : 2); 
		this.cMunFG = cMunFG.get(this.parameterToIssuer.issuer.MUNICIPIO_CODIGO);
		this.tpImp = tpImp.get(Helper.PORTRAIT_MODE_DANFE);
		this.tpEmis = tpEmis.get(Helper.NORMAL_ISSUE);
		this.tpAmb = tpAmb.get(this.parameterToIssuer.debug);
		this.cDV = cDV.get(Helper.KEY_CHECKER_TYPE);
		this.finNFe = finNFe.get(Helper.NORMAL_PURPOSE);
		this.indFinal = indFinal.get(Helper.SALE_TO_END_CONSUMER);
		this.indPres = indPres.get(Helper.NON_FACETOFACE_OPERATION_OVER_THE_INTERNET);
		this.procEmi = procEmi.get(Helper.ISSUANCE_PROCESS);
		this.verProc = verProc.get(Helper.VERSION_OF_THE_ISSUANCE_PROCESS);
	}

	dateFormat(now : Date) : string {
		const isoStrDate = now.toISOString();
		let strDateFormat = isoStrDate.split(".")[0];
		strDateFormat += "-03:00";
		return strDateFormat;
	}
}

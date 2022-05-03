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

	private _cUF : cUF;
    private _cNF : cNF;
    private _natOp : natOp;
    private _indPag : indPag;
    private _mod : mod;
    private _serie : serie;
    private _nNF : nNF;
    private _dhEmi : dateType;
    private _dhSaiEnt: dateType;
    private _tpNF : tpNF;
    private _idDest : idDest;
    private _cMunFG : cMunFG;
    private _tpImp : tpImp;
    private _tpEmis : tpEmis;
    private _cDV : cDV;
    private _tpAmb : tpAmb;
    private _finNFe : finNFe;
    private _indFinal : indFinal;
    private _indPres : indPres;
    private _procEmi : procEmi;
    private _verProc : verProc;

	get cUF() : number {return this._cUF.get()}
	get cNF() : number { return this._cNF.get() }
	get natOp() : string { return this._natOp.get() }
	get indPag() : number { return this._indPag.get() }
	get mod() : number { return this._mod.get() }
	get serie() : number { return this._serie.get() }
	get nNF() : number { return this._nNF.get() }
	get dhEmi() : string { return this._dhEmi.get() }
	get dhSaiEnt() : string { return this._dhSaiEnt.get() }
	get tpNF() : number { return this._tpNF.get() }
	get idDest() : number { return this._idDest.get() }
	get cMunFG() : number { return this._cMunFG.get() }
	get tpImp() : number { return this._tpImp.get() }
	get tpEmis() : number { return this._tpEmis.get() }
	get cDV() : number { return this._cDV.get() }
	get tpAmb() : number { return this._tpAmb.get() }
	get finNFe() : number { return this._finNFe.get() }
	get indFinal() : number { return this._indFinal.get() }
	get indPres() : number { return this._indPres.get() }
	get procEmi() : number { return this._procEmi.get() }
	get verProc() : string { return this._verProc.get() }

	private buildIDE() {
		this._cUF = new cUF(Helper.getCodeState(this.parameterToIssuer.issuer.UF));
		this._cNF = new cNF(Math.random() * (99999999  - 0) + 0);
		this._natOp = new natOp(Helper.getNatOp(this.parameterToIssuer.client.cliente_pessoa));
		this._indPag = new indPag(this.parameterToIssuer.order.pagamento_parcelamento > 1 ? 1 : 0);
		this._mod = new mod(Helper.DOCUMENT_TEMPLATE);
		this._serie = new serie(this.parameterToIssuer.serie);
		this._nNF = new nNF(this.parameterToIssuer.nNF);
		this._dhEmi = new dateType(this.dateFormat(new Date()));
		this._tpNF = new tpNF(this.parameterToIssuer.typeOperation);

		const saleWithinTheState = this.parameterToIssuer.issuer.UF == this.parameterToIssuer.deliveryCity.estado;
		const exteriorSale = this.parameterToIssuer.deliveryCity.estado = 'EX';

		this._idDest = new idDest(exteriorSale ? 3 : saleWithinTheState ? 1 : 2); 
		this._cMunFG = new cMunFG(this.parameterToIssuer.issuer.MUNICIPIO_CODIGO);
		this._tpImp = new tpImp(Helper.PORTRAIT_MODE_DANFE);
		this._tpEmis = new tpEmis(Helper.NORMAL_ISSUE);
		this._tpAmb = new tpAmb(this.parameterToIssuer.debug);
		this._cDV = new cDV(Helper.KEY_CHECKER_TYPE);
		this._finNFe = new finNFe(Helper.NORMAL_PURPOSE);
		this._indFinal = new indFinal(Helper.SALE_TO_END_CONSUMER);
		this._indPres = new indPres(Helper.NON_FACETOFACE_OPERATION_OVER_THE_INTERNET);
		this._procEmi = new procEmi(Helper.ISSUANCE_PROCESS);
		this._verProc = new verProc(Helper.VERSION_OF_THE_ISSUANCE_PROCESS);
	}

	dateFormat(now : Date) : string {
		const isoStrDate = now.toISOString();
		let strDateFormat = isoStrDate.split(".")[0];
		strDateFormat += "-03:00";
		return strDateFormat;
	}
}

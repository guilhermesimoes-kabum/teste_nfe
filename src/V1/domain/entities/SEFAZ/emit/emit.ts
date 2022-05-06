import {ParametersToIssuer} from "src/V1/domain/shared/parametersToIssuer.interface";
import {enderEmit} from "./enderEmit";

export class emit {

	constructor(private parameterToIssuer : ParametersToIssuer) {
		this.buildEmit();
	}

	private _CNPJ? : CNPJ;
	private _CPF?: CPF;
	private _xNome : xNome;
	private xFrant? : xFant;
	private _IM : IM;
	private _CNAE? : CNAE;
	private _CRT : CRT;
	private _enderEmit : enderEmit;

	get CNPJ() : number;
	get CPF(): number;
	get xNome() : string;
	get Frant() : string;
	get IM() : string;
	get CNAE() : number;
	get CRT() : number;
	get enderEmit() : enderEmit;

	buildEmit() {
	}
}

import {ENVIRONMENT} from "./enums/ENVIRONMENT";

export class  tpAmb {
	private environment : number;
	constructor(debug : boolean) {
		this.environment = debug ? ENVIRONMENT.HOMOLOG : ENVIRONMENT.PRODUCTION 
	}

	get() : number {
		return this.environment;
	}
}

import {TPNF} from "./enums/TPNF";

export class tpNF {
	constructor(private typeNF : number) {
		if(this.validity(this.typeNF)) {
			throw new Error();
		}
	}

	private validity(typeNF : number) : boolean {
		const tpNFEnum = TPNF[typeNF];
		return tpNFEnum != null; 
	}

	get() : number {
		return this.typeNF;
	}
}

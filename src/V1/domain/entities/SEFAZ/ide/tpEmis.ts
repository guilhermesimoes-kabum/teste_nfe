import {TPEMIS} from "./enums/TPEMIS";

export class tpEmis {
	constructor(private issuerType : number) {
		if(!this.validity(this.issuerType)) { 
			throw new Error();
		}
	}

	private validity(issuerType : number) : boolean {
		const tpEmisEnum = TPEMIS[issuerType];
		return tpEmisEnum != null;
	}

	get() : number {
		return this.issuerType;
	}
}

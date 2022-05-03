import {PROCEMI} from "./enums/PROCEMI";

export class procEmi {
	constructor(private issuerProcess : number) {
		if(!this.validity(issuerProcess)) {
		 	throw new Error();
		}
	}

	private validity(issuerProcess : number) : boolean {
		const issuerProcessEnum = PROCEMI[issuerProcess];
		return issuerProcessEnum != null;
	}

	get() : number {
		return this.issuerProcess;
	}
}

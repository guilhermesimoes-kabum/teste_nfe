import {INDFINAL} from "./enums/INDFINAL";

export class indFinal {
	constructor(private indicateFinal : number) {
		if(!this.validity(indicateFinal)) {
			throw new Error();
		}
	}
	
	private validity(indicateFinal : number) : boolean {
		const indicateFinalEnum = INDFINAL[indicateFinal];
		return indicateFinalEnum != null;
	}

	get() : number {
		return this.indicateFinal;
	}
}

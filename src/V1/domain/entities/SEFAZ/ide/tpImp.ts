import {TPIMP} from "./enums/TPIMP";

export class tpImp {
	constructor(private printFormat : number) {
		if(this.validity(this.printFormat)) { 
			throw new Error();
		} 
	} 

	private validity(printFormat : number) : boolean {
		const tpImpEnum = TPIMP[printFormat];
		return tpImpEnum != null;
	}

	get() : number {
		return this.printFormat;
	}
}

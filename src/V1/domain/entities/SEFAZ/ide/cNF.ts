export class cNF {
	constructor(private codeNF: number) {
		if(!this.validity(codeNF)) {
			throw new Error();
		}
	}

	private validity(codeNF : number) : boolean {
		return Number.isInteger(codeNF) 
			&& codeNF > 0 
			&& codeNF < 100000000
	}

	get() : number {
		return this.codeNF;
	}
}

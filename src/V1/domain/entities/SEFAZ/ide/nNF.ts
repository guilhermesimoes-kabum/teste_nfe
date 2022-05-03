export class nNF {
	constructor(private numberNF : number) {
		if(this.validity(numberNF)) {
			throw new Error();
		}
	}

	private validity(numberNF: number) : boolean {
		return Number.isInteger(numberNF)
			&& numberNF > 0
			&& numberNF < 1000000000;
	}

	get() : number {
		return this.numberNF;
	}
}


export abstract class nNF {
	static get(numberNF : number) : number {
		if(nNF.validity(numberNF)) {
			return numberNF;
		}
		throw new Error();
	}

	static validity(numberNF: number) : boolean {
		return Number.isInteger(numberNF)
			&& numberNF > 0
			&& numberNF < 1000000000;
	}
}

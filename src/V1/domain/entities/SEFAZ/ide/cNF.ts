export abstract class cNF {
	static get(codeNF: number) : number {
		if(cNF.validity(codeNF)) {
			return codeNF;
		}

		throw new Error();
	}

	static validity(codeNF : number) : boolean {
		return Number.isInteger(codeNF) 
			&& codeNF > 0 
			&& codeNF < 100000000
	}
}

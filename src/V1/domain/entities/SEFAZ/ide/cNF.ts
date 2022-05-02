export abstract class cNF {
	static get(codeNF: Number) {
		if(cNF.validity(codeNF)) {
			return codeNF;
		}

		throw new Error();
	}

	static validity(codeNF : Number) : Boolean {
		return Number.isInteger(codeNF) 
			&& codeNF > 0 
			&& codeNF < 100000000
	}
}


export abstract class tpNF {
	static get(typeNF : number) : number{
		if(tpNF.validity(typeNF)) {
			return typeNF;
		}

		throw new Error();
	}

	static validity(typeNF : number) : boolean {
		return typeNF == 1 || typeNF == 0; 
	}
}

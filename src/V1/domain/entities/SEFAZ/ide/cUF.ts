export abstract class cUF {
	static validity(stateCode: number) : boolean {
		return Number.isInteger(stateCode) 
			&& stateCode < 100
			&& stateCode > 0; 
	}

	static get(stateCode: number) : number{
		if(cUF.validity(stateCode)) {
			return stateCode;
		}
		throw new Error();
	}
}

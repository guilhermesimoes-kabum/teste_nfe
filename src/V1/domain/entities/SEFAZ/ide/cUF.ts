export abstract class cUF {
	static validity(stateCode: Number) : Boolean {
		return Number.isInteger(stateCode) 
			&& stateCode < 100
			&& stateCode > 0; 
	}

	static get(stateCode: Number) {
		if(cUF.validity(stateCode)) {
			return stateCode;
		}
		throw new Error();
	}
}

export abstract class tpEmis {
	static get(issuerType : number) : number {
		if(tpEmis.validity(issuerType)) { 
			return issuerType; 
		}

		throw new Error();
	}

	static validity(issuerType : number) : boolean {
		return issuerType == 1
			|| issuerType == 2
			|| issuerType == 3
			|| issuerType == 4
			|| issuerType == 5
			|| issuerType == 6
			|| issuerType == 7
			|| issuerType == 9;
	}
}

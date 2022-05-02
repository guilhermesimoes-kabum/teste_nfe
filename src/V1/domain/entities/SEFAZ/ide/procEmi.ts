

export class procEmi {
	static get(issuerProcess : number) : number{
		if(procEmi.validity(issuerProcess)) {
			return issuerProcess;
		}

		 throw new Error();
	}

	static validity(issuerProcess : number) : boolean {
		return issuerProcess == 0
			|| issuerProcess == 1 
			|| issuerProcess == 2 
			|| issuerProcess == 3;
	}
}

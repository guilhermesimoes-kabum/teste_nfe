

export abstract class indPres {
	static get(presenceIndicator : number) : number {
		if(indPres.validity(presenceIndicator)) {
			return presenceIndicator;
		}

		throw new Error();
	}

	static validity(presenceIndicator : number): boolean {
		return presenceIndicator == 0
			|| presenceIndicator == 1 
			|| presenceIndicator == 2 
			|| presenceIndicator == 3 
			|| presenceIndicator == 4 
			|| presenceIndicator == 9; 
	}
}

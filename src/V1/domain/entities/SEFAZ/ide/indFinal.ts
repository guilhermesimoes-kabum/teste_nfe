
export abstract class indFinal {
	static get(indicateFinal : number) : number {
		if(indFinal.validity(indicateFinal)) {
			return indicateFinal;
		}
		throw new Error();
	}
	
	static validity(indicateFinal : number) : boolean {
		return indicateFinal == 0
			|| indicateFinal == 1;
	}
}

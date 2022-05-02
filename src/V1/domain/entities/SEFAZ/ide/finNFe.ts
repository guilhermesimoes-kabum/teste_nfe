
export class finNFe {
	static get(finnally : number) : number {
		if(finNFe.validity(finnally)) {
			return finnally;
		}

		throw new Error();
	}

	static validity(finnally : number) : boolean {
		return finnally == 1
			|| finnally == 2
			|| finnally == 3 
 			|| finnally == 4
 			|| finnally == 0 
			|| finnally == 9;
	}
}

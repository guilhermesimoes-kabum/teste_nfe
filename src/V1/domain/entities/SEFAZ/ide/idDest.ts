
export class idDest {
	static get(destinationIdentification : number) : number {
		if(idDest.validity(destinationIdentification)) {
			return destinationIdentification;
		}

		throw new Error();
	}

	static validity(destinationIdentification : Number) : boolean {
		return destinationIdentification == 1
			|| destinationIdentification == 2 
			|| destinationIdentification == 3; 
	}
}

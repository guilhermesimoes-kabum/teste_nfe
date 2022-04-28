
export class idDest {
	constructor(private destinationIdentification : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.destinationIdentification == 1
			|| this.destinationIdentification == 2 
			|| this.destinationIdentification == 3; 
	}
}

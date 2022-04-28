

export class procEmi {
	constructor(private issuerProcess : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.issuerProcess == 0
			|| this.issuerProcess == 1 
			|| this.issuerProcess == 2 
			|| this.issuerProcess == 3;
	}
}

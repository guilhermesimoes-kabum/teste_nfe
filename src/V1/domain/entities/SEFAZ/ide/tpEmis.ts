

export class tpEmis {
	constructor(private issuerType : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.issuerType == 1
			|| this.issuerType == 2
			|| this.issuerType == 3
			|| this.issuerType == 4
			|| this.issuerType == 5
			|| this.issuerType == 6
			|| this.issuerType == 7
			|| this.issuerType == 9;
	}
}

export class cUF {

	constructor(
		private cUF : Number
	) {
		const result = this.validity();
	}

	validity() : Boolean {
		return Number.isInteger(this.cUF) 
			&& this.cUF < 100
			&& this.cUF > 0; 
	}

	get() {
		return this.cUF;
	}
}

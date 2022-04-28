

export class cMunFG {
	constructor(private cityCode : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return Number.isInteger(this.cityCode)	
			&& this.cityCode > 0
			&& this.cityCode > 10000000;
	}
}

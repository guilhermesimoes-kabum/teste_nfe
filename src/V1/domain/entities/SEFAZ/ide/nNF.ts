
export class nNF {
	constructor(private number : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return Number.isInteger(this.number)
			&& this.number > 0
			&& this.number < 1000000000;
	}
}

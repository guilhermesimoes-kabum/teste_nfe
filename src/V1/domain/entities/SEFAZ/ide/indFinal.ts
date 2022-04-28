
export class indFinal {
	constructor(private indicateFInal : Number) {
		const result = this.validity();
	}
	
	validity() : Boolean {
		return this.indicateFInal == 0
			|| this.indicateFInal == 1;
	}
}

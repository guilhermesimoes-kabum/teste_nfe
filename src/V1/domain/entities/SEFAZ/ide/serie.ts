
export class serie {
	constructor(private serie : Number) {
		const result = this.validity();	
	}

	validity() : Boolean {
		return Number.isInteger(this.serie)
			&& this.serie < 1000 
			&& this.serie > 0;
	}
}

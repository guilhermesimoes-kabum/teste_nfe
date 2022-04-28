
export class tpNF {
	constructor(private typeNF : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.typeNF == 1 || this.typeNF == 0; 
	}
}

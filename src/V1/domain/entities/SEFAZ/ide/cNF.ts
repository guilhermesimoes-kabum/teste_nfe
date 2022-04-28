
export class cNF {
	constructor(private codeNF: Number){
		this.validity()
	}

	validity() : Boolean {
		return Number.isInteger(this.codeNF) 
			&& this.codeNF > 0 
			&& this.codeNF < 100000000
	}
}

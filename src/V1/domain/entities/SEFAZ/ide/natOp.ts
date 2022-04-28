

export class natOp {
	constructor(private natureOfoperation : String) {
		const result = this.validity(); 
	}	

	validity() : Boolean {
		return this.natureOfoperation.length < 61;
	}
} 

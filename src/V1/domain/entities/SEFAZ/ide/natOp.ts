export class natOp {
	constructor(private natureOfoperation : string) {
		if(!this.validity(natureOfoperation)) {
			throw new Error();
		}
	}

	private validity(natureOfoperation : string) : boolean {
		return natureOfoperation.length < 61;
	}

	get() : string {
		return this.natureOfoperation;
	}
} 

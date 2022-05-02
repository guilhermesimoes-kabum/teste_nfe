export abstract class natOp {
	static get(natureOfoperation : string) : string {
		if(natOp.validity(natureOfoperation)) {
			return natureOfoperation; 
		}
		throw new Error();
	}	

	static validity(natureOfoperation : string) : boolean {
		return natureOfoperation.length < 61;
	}
} 

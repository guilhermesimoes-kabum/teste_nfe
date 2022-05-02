export abstract class natOp {
	static get(natureOfoperation : String) : String {
		if(natOp.validity(natureOfoperation)) {
			return natureOfoperation; 
		}
		throw new Error();
	}	

	static validity(natureOfoperation : String) : Boolean {
		return natureOfoperation.length < 61;
	}
} 

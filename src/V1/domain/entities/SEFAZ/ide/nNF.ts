
export abstract class nNF {
	static get(number : Number) : Number {
		if(nNF.validity(number)) {
			return number;
		}
		throw new Error();
	}

	static validity(number: Number) : Boolean {
		return Number.isInteger(number)
			&& number > 0
			&& number < 1000000000;
	}
}

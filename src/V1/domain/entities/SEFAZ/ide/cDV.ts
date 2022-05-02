

export abstract class cDV {
	static validity(DV : Number) : Boolean {
		return Number.isInteger(DV)
			&& DV > 0
			&& DV < 10;
	}

	static get(dv : Number) : Number {
		if(cDV.validity(dv)) {
			return dv;
		}
		throw new Error();
	}
}

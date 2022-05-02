

export abstract class cDV {
	static get(dv : number) : number {
		if(cDV.validity(dv)) {
			return dv;
		}
		throw new Error();
	}

	static validity(DV : Number) : boolean {
		return Number.isInteger(DV)
			&& DV > 0
			&& DV < 10;
	}
}

export abstract class cMunFG {
	static get(cityCode : number) : number {
		if(cMunFG.validity(cityCode)){
			return cityCode;
		}

		throw new Error();
	}

	static validity(cityCode : number) : boolean {
		return Number.isInteger(cityCode)	
			&& cityCode > 0
			&& cityCode > 10000000;
	}
}

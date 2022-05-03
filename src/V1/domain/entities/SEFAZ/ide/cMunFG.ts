export class cMunFG {
	constructor(private cityCode : number) {
		if(this.validity(this.cityCode)){
			throw new Error();
		}
	}

	private validity(cityCode : number) : boolean {
		return Number.isInteger(cityCode)	
			&& cityCode > 0
			&& cityCode < 10000000;
	}

	get() : number {
		return this.cityCode;	
	}
}

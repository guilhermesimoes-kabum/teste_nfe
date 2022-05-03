export class cDV {
	constructor(private dv : number) {
		if(!this.validity(dv)) {
			throw new Error();
		}
	}

	private validity(DV : Number) : boolean {
		return Number.isInteger(DV)
			&& DV > 0
			&& DV < 10;
	}

	get() : number {
		return this.dv;
	}
}

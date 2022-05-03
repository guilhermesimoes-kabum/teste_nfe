export class serie {
	constructor(private series : number) {
		if(!this.validity(series)) {
			throw new Error();
		}
	}

	private validity(series : number) : boolean {
		return Number.isInteger(series)
			&& series < 1000 
			&& series > 0;
	}

	get() : number {
		return this.series;
	}
}

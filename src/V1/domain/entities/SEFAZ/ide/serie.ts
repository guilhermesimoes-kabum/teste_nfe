
export class serie {
	static get(series : number) : number {
		if(serie.validity(series)) {
			return series
		}
		throw new Error();
	}

	static validity(series : number) : boolean {
		return Number.isInteger(series)
			&& series < 1000 
			&& series > 0;
	}
}

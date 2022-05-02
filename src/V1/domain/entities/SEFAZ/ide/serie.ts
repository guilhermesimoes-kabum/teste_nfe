
export class serie {
	static get(series : Number) : Number{
		if(serie.validity(series)) {
			return series
		}
		throw new Error();
	}

	static validity(series : Number) : Boolean {
		return Number.isInteger(series)
			&& series < 1000 
			&& series > 0;
	}
}

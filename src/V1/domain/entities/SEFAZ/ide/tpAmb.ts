

export class  tpAmb {
	constructor(private debug : Boolean) {
		const result = this.validity();
	}

	validity() : Number {
		return this.debug ? 2 : 1;
	}
}

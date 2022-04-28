
export class indPag {

	constructor(private indPag: Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.indPag == 0 
			|| this.indPag == 1
			|| this.indPag == 2;
	}
}

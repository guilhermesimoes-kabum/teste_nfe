
export class mod {
	constructor(private moduleFiscalDocument : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.moduleFiscalDocument == 55 
			|| this.moduleFiscalDocument == 65;
	}
}

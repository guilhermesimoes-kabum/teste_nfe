
export class finNFe {
	constructor(private finnally : Number) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.finnally == 1
			|| this.finnally == 2
			|| this.finnally == 3 
 			|| this.finnally == 4
 			|| this.finnally == 0 
			|| this.finnally == 9;
	}
}

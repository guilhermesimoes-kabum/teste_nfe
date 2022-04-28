

export class tpImp {
	constructor(private printFormat : Number) {
		this.validity(); 
	} 

	validity() : Boolean {
		return this.printFormat == 0 
			|| this.printFormat == 1
			|| this.printFormat == 2
			|| this.printFormat == 3
			|| this.printFormat == 4
			|| this.printFormat == 5;
	}
}

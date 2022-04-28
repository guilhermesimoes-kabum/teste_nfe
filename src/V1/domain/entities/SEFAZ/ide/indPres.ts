

export class indPres {
	constructor(private presenceIndicator : Number) {
		this.validity();
	}

	validity(): Boolean {
		return this.presenceIndicator == 0
			|| this.presenceIndicator == 1 
			|| this.presenceIndicator == 2 
			|| this.presenceIndicator == 3 
			|| this.presenceIndicator == 4 
			|| this.presenceIndicator == 9; 
	}
}



export class cDV {
	constructor(private DV : Number) {
		this.validity()
	}

	validity() : Boolean {
		return Number.isInteger(this.DV)
			&& this.DV > 0
			&& this.DV < 10;
	}
}

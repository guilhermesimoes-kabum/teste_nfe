export class cUF {
	private validity(stateCode: number) : boolean {
		return Number.isInteger(stateCode) 
			&& stateCode < 100
			&& stateCode > 0; 
	}

	constructor(private stateCode: number) {
		if(!this.validity(stateCode)) {
			throw new Error();
		}
	}

	public get() : number {
		return this.stateCode;
	}
}

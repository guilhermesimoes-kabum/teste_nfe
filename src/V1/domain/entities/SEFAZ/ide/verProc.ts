

export class verProc {
	constructor(private issuerProcess : String) {
		const result = this.validity();
	}

	validity() : Boolean {
		return this.issuerProcess.length < 21;
	}
}

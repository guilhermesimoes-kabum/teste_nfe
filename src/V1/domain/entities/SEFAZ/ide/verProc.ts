export class verProc {
	constructor(private issuerProcess : string) {
		if(!this.validity(issuerProcess)) {
			throw new Error();
		}
	}

	private validity(issuerProcess : string) : boolean {
		return issuerProcess.length < 21;
	}

	get() : string {
		return this.issuerProcess;
	}
}

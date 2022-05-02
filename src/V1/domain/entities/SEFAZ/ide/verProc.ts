export abstract class verProc {
	static get (issuerProcess : string) {
		if(verProc.validity(issuerProcess)) {
			return issuerProcess; 
		}
		
		throw new Error();
	}

	static validity(issuerProcess : string) : Boolean {
		return issuerProcess.length < 21;
	}
}

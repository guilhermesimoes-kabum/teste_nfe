import {IDDEST} from "./enums/IDDEST";

export class idDest {
	constructor(private destinationIdentification : number) {
		if(this.validity(destinationIdentification)) {
			throw new Error();
		}
	}

	private validity(destinationIdentification : number) : boolean {
		const destinationEnum = IDDEST[destinationIdentification];
		return destinationEnum != null; 
	}

	get() : number {
		return this.destinationIdentification;
	}
}

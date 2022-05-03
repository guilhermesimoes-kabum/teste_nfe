import {INDPRES} from "./enums/INDPRES";

export class indPres {
	constructor(private presenceIndicator : number) {
		if(!this.validity(presenceIndicator)) {
			throw new Error();
		}
	}

	private validity(presenceIndicator : number): boolean {
		const presenceIndicatorEnum = INDPRES[presenceIndicator];
		return presenceIndicatorEnum != null;
	}

	get() : number {
		return this.presenceIndicator;
	}
}

import {FINNFE} from "./enums/FINNFE";

export class finNFe {
	constructor(private finnally : number) {
		if(!this.validity(finnally)) {
			throw new Error();
		}
	}

	private validity(finnally : number) : boolean {
		const finnallyEnum = FINNFE[finnally]
		return finnallyEnum != null;
	}

	get() : number {
		return this.finnally;
	}
}

import {INDPAG} from "./enums/INDPAG";

export class indPag {
	constructor(private paymenteIndicate: number) {
		if(!this.validity(paymenteIndicate)) {
			throw new Error();
		}
	}

	private validity(indPag: number) : boolean {
		const indPagEnum = INDPAG[indPag];
		return indPagEnum != null;
	}

	get() : number {
		return this.paymenteIndicate; 
	}
}

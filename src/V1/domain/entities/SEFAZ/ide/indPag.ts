
export abstract class indPag {

	static get(paymenteIndicate: number) : number {
		if(indPag.validity(paymenteIndicate)) {
			return paymenteIndicate; 
		}

		throw new Error();
	}

	static validity(indPag: number) : boolean {
		return indPag == 0 
			|| indPag == 1
			|| indPag == 2;
	}
}

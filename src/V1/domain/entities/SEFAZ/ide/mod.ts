import {MOD} from "./enums/MOD";

export class mod {
	constructor (private moduleFiscalDocument : number) {
		if(!this.validity(moduleFiscalDocument)) {
			throw new Error();
		}
	}

	private validity(moduleFiscalDocument : number) : boolean {
		const moduleFiscalDocumentEnum = MOD[moduleFiscalDocument];
		return moduleFiscalDocumentEnum != null;
	}

	get() : number {
		return this.moduleFiscalDocument;
	} 
}

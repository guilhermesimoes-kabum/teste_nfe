export abstract class mod {
	static get (moduleFiscalDocument : Number) {
		if(mod.validity(moduleFiscalDocument)) {
			return 	moduleFiscalDocument;
		}
		throw new Error();
	}

	static validity(moduleFiscalDocument : Number) : Boolean {
		return moduleFiscalDocument == 55 
			|| moduleFiscalDocument == 65;
	}
}

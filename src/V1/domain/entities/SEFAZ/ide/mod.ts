export abstract class mod {
	static get (moduleFiscalDocument : number) : number{
		if(mod.validity(moduleFiscalDocument)) {
			return 	moduleFiscalDocument;
		}
		throw new Error();
	}

	static validity(moduleFiscalDocument : number) : boolean {
		return moduleFiscalDocument == 55 
			|| moduleFiscalDocument == 65;
	}
}



export abstract class tpImp {
	static get(printFormat : number) : number {
		if(tpImp.validity(printFormat)) { 
			return printFormat;
		} 

		throw new Error();
	} 

	static validity(printFormat : number) : boolean {
		return printFormat == 0 
			|| printFormat == 1
			|| printFormat == 2
			|| printFormat == 3
			|| printFormat == 4
			|| printFormat == 5;
	}
}

import {ParametersToIssuer} from "../../interface/parametersToIssuer.interface";
import {TaxationInterface} from "../../interface/TaxationInterface";
import {det} from "./det/det";
import {emit} from "./emit/emit";
import {ide} from "./ide/ide";
import {total} from "./total/total";
import {transp} from "./transp/transp";

export class NFE {

	constructor(
		private parameterToIssuer : ParametersToIssuer, 
		private taxation : TaxationInterface
	){
		this.generateMandatoryGroups();
	}; 

	ide : ide;
	det : Array<det>;
	emit : emit;
	total : total;
	transp : transp;

	generateMandatoryGroups() {
		this.ide = new ide(this.parameterToIssuer);
	}
}

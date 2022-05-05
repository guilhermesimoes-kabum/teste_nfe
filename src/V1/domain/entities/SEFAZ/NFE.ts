import {ParametersToIssuer} from "src/V1/shared/parametersToIssuer.interface";
import {TaxationInterface} from "../../interface/TaxationInterface";
import {Taxation} from "../taxation";
import {det} from "./det";
import {emit} from "./emit";
import {ide} from "./ide";
import {total} from "./total";
import {transp} from "./transp";

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

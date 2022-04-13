import {ParametersToIssuer} from "src/V1/shared/parametersToIssuer.interface";
import {Taxation} from "../taxation";


export class NFE {
	constructor(
		private taxation: Taxation,
		private parameterToIssuer : ParametersToIssuer
	){
		this.generateMandatoryGroups();
	}; 

	generateMandatoryGroups() {

	}

	det() {

	}

	ide() {

	}

	emit() {

	}

	total() {

	}
}

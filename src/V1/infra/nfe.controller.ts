import {Body, Controller, HttpException, HttpStatus, Post} from "@nestjs/common";
import {ParametersToIssuer} from "../domain/interface/parametersToIssuer.interface";
import {ResponseIssuer} from "../domain/interface/responseIssuer";
import {Facade} from "./facade";
import {InCluster} from "./lib/InCluster";

@Controller('nfe')
export class NFeController {

	private facade : Facade;
	constructor(){
		this.facade = new Facade();
	}

	@Post()
	async issueInvoice(@Body() parameterToIssuer : ParametersToIssuer) : Promise<ResponseIssuer> {
		try {
			return this.facade.issueSalesInvoicy(parameterToIssuer);
		}catch(error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}
}

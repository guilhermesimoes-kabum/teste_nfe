import {Controller, HttpException, HttpStatus, Param, Post} from "@nestjs/common";
import {ResponseEmission} from "./adapter/responseEmission";
import {Facade} from "./facade";

@Controller('nfe')
export class NFeController {

	private facade : Facade;
	constructor(){
		this.facade = new Facade();
	}

	@Post('/:id_pedido')
	async issueSalesInvoicy(@Param('id_pedido') id_pedido: string) : Promise<ResponseEmission> {
		try {
			return this.facade.issueSalesInvoicy(id_pedido);
		}catch(error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}
}

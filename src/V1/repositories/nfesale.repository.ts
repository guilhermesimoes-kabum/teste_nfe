import {NFeInterfaceRepository} from "../shared/nfe.interface.repository";

export class NFeSaleRepository implements NFeInterfaceRepository {
	alreadyContainsNfeIssued(codigo_pedido: number): boolean {
		return false;
	}

	getNumber(): Number {
		return 10;	
	}
}

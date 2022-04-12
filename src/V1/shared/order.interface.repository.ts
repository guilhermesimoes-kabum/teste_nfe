import {OrderDTO} from "./order.dto";

export interface OrderInterfaceRepository {
	findById(id_pedido: string) : OrderDTO;
}

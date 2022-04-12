import {OrderDTO} from "../shared/order.dto";
import {OrderInterfaceRepository} from "../shared/order.interface.repository";

export class OrderRepository implements OrderInterfaceRepository {
	findById(id_pedido: string): OrderDTO {
		return new OrderDTO;
	}
}

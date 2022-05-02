import {OrderInterfaceRepository} from "../shared/order.interface.repository";
import {Item, Order} from "../shared/parametersToIssuer.interface";

export class OrderRepository implements OrderInterfaceRepository {

	findOrderToIssuerById(codigo: string): Order {
		return {} as Order;
	}

	 getItemsOfTheOrderToIssuer(idOrder: string): Item[] {
	 	return [ {} as Item ];
	 }
}

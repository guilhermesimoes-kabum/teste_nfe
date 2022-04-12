import {Item, Order} from "./parametesToEmission.interface";

export interface OrderInterfaceRepository {
	findOrderToIssuerById(codigo: string) : Order;
	getItemsOfTheOrderToIssuer(idOrder: string) : Array<Item>;
}

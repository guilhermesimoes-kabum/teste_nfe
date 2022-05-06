import { OrderInterfaceRepository } from "../shared/order.interface.repository";
import { Item, Order } from "../shared/parametersToIssuer.interface";
export declare class OrderRepository implements OrderInterfaceRepository {
    findOrderToIssuerById(codigo: string): Order;
    getItemsOfTheOrderToIssuer(idOrder: string): Item[];
}

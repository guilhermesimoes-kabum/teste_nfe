import { Item, Order } from "./parametersToIssuer.interface";
export interface OrderInterfaceRepository {
    findOrderToIssuerById(codigo: string): Order;
    getItemsOfTheOrderToIssuer(idOrder: string): Array<Item>;
}

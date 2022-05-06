import { DeliveryCityInterfaceRepository } from "../shared/deliveryCity.interface.repository";
import { DeliveryCity } from "../shared/parametersToIssuer.interface";
export declare class DeliveryCityRepository implements DeliveryCityInterfaceRepository {
    findDeliveryCityToIssuer(codigo: Number): DeliveryCity;
}

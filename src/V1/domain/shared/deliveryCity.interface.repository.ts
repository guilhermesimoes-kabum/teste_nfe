import {DeliveryCity} from "./parametersToIssuer.interface";

export interface DeliveryCityInterfaceRepository {
	findDeliveryCityToIssuer(codigo: Number) : DeliveryCity;
}

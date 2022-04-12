import {DeliveryCity} from "./parametesToEmission.interface";

export interface DeliveryCityInterfaceRepository {
	findDeliveryCityToIssuer(codigo: Number) : DeliveryCity;
}

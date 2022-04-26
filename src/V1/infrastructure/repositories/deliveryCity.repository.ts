import {DeliveryCityInterfaceRepository} from "../shared/deliveryCity.interface.repository";
import {DeliveryCity} from "../shared/parametersToIssuer.interface";

export class DeliveryCityRepository implements DeliveryCityInterfaceRepository {
	findDeliveryCityToIssuer(codigo: Number): DeliveryCity {
		return {} as DeliveryCity;
	}
}

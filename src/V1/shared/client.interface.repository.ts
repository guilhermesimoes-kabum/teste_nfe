import {Client} from "./parametersToIssuer.interface";

export interface ClientInterfaceRepository {
	findByClientIdToIssuer(idClient: String) : Client;
}

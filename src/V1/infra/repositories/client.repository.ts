import {ClientInterfaceRepository} from "../shared/client.interface.repository"
import {Client} from "../shared/parametersToIssuer.interface";

export class ClientRepository implements ClientInterfaceRepository {
	findByClientIdToIssuer(idClient: String): Client {
		return {} as Client;
	}	
}

import { NFeInterfaceRepository } from "../shared/nfe.interface.repository";
export declare class NFeSaleRepository implements NFeInterfaceRepository {
    alreadyContainsNfeIssued(codigo_pedido: number): boolean;
    getNumber(): Number;
}

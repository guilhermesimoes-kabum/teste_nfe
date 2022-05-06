export interface NFeInterfaceRepository {
    alreadyContainsNfeIssued(codigo_pedido: Number): boolean;
    getNumber(issuerCode: Number, serie: Number): Number;
}

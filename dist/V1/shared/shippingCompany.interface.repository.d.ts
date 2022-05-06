import { ShippingCompany } from "./parametersToIssuer.interface";
export interface ShippingCompanyInterfaceRepository {
    findByCodeFreightToIssuer(codeFreight: Number): ShippingCompany;
}

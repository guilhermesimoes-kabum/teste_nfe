import { ShippingCompany } from "../shared/parametersToIssuer.interface";
import { ShippingCompanyInterfaceRepository } from "../shared/shippingCompany.interface.repository";
export declare class ShippingCompanyRepository implements ShippingCompanyInterfaceRepository {
    findByCodeFreightToIssuer(codeFreight: Number): ShippingCompany;
}

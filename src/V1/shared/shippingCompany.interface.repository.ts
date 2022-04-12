import {ShippingCompany} from "./parametesToEmission.interface";

export interface ShippingCompanyInterfaceRepository {
	findByCodeFreightToIssuer(codeFreight: Number) : ShippingCompany;
}

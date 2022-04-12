import {ResponseEmission} from "../adapter/responseEmission";

export interface EmissionInterface {
	sendInvoicy() : Promise<ResponseEmission>;
}

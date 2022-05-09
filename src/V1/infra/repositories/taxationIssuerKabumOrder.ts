import {TaxationInterface, ICMS, PIS, COFINS, ICMS_UFDEST} from "../../domain/interface/TaxationInterface";
import {invoiceAliquotICMSstate} from "./entities/KbNotasfiscaisAliquotaICMSestado";

export class TaxationIssuerKabumOrder implements TaxationInterface {
	getICMS() : ICMS {

		const icmsAliq = invoiceAliquotICMSstate.findOneBy({
			stateOfOrigin : "ES", 
			destinationState : "SP"
		}); 

		return {
			PERC_RED_BC : 0,
			CODIGO : "00",
			ALIQ : icmsAliq,
			FCP : 0
		}
	}

	getPIS() : PIS {
		return {
			PERC_RED_BC : 0,
			DISP_LEG : "",
			ALIQ : 2,
			CODIGO : "49" 
		}
	}

	getCOFINS() : COFINS {
		return {
			PERC_RED_BC : 0,
			DISP_LEG : "",
			ALIQ : 2,
			CODIGO : "49"
		}
	}

	getICMS_UFDEST() : ICMS_UFDEST {
		return {
			PERC_RED_BC : 0,
			PERC_PART_DEST : 0,
			CODIGO : "",
			ALIQ : 0,
			FCP : 0 
		}
	}
}

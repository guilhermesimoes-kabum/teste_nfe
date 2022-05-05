import {COFINS, ICMS, ICMS_UFDEST, PIS, TaxationInterface} from "src/V1/domain/interface/TaxationInterface";

export class TaxationIssuerKabumOrder implements TaxationInterface {
	getICMS() : ICMS {
		return {
			PERC_RED_BC : 0,
			CODIGO : "00",
			ALIQ : 12,
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

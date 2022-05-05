export interface ICMS {
	PERC_RED_BC : number;
	CODIGO : string;
	ALIQ : number;
	FCP : number;
}

export interface PIS {
	PERC_RED_BC : number;
	DISP_LEG : string;
	ALIQ : number;
	CODIGO : string;
}

export interface COFINS {
	PERC_RED_BC : number;
	DISP_LEG : string;
	ALIQ : number;
	CODIGO : string;
}

export interface ICMS_UFDEST {
	PERC_RED_BC : number;
	PERC_PART_DEST : number;
	CODIGO : string;
	ALIQ : number;
	FCP : number;
}

export interface TaxationInterface {
	getICMS() : ICMS;
	getPIS() : PIS;
	getCOFINS() : COFINS;
	getICMS_UFDEST() : ICMS_UFDEST;
}

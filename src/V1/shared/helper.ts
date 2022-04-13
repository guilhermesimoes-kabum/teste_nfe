export abstract class Helper {
	public static VERSION_OF_THE_ISSUANCE_PROCESS = "MIGRATENFe"; 
	public static ISSUANCE_PROCESS = 0;
	public static NON_FACETOFACE_OPERATION_OVER_THE_INTERNET = 2;
	public static SALE_TO_END_CONSUMER = 1;
	public static NORMAL_PURPOSE = 1;
	public static KEY_CHECKER_TYPE = 6; 
	public static NORMAL_ISSUE = 1;
	public static PORTRAIT_MODE_DANFE = 1;
	public static DOCUMENT_TEMPLATE = 55;

	private static CODE_STATE = {
	    'RO' :  11,
	    'AC' :  12,
	    'AM' :  13,
	    'RR' :  14,
	    'PA' :  15,
	    'AP' :  16,
	    'TO' :  17,
	    'MA' :  21,
	    'PI' :  22,
	    'CE' :  23,
	    'RN' :  24,
	    'PB' :  25,
	    'PE' :  26,
	    'AL' :  27,
	    'SE' :  28,
	    'BA' :  29,
	    'MG' :  31,
	    'ES' :  32,
	    'RJ' :  33,
	    'SP' :  35,
	    'PR' :  41,
	    'SC' :  42,
	    'RS' :  43,
	    'MS' :  50,
	    'MT' :  51,
	    'GO' :  52,
	    'DF' :  53
	};

	private static NAT_OP = {
		'J' : "VENDA PARA PESSOA JURIDICA",
		'F' : "VENDA PARA CONSUMIDOR FINAL" 
	};

	public static getCodeState(initials: String) : any {
		type ObjectKey = keyof typeof Helper.CODE_STATE;
		const myIndexVar = initials as ObjectKey;
		return Helper.CODE_STATE[myIndexVar];
	}

	public static getNatOp(initials: String) : any {
		type ObjectKey = keyof typeof Helper.NAT_OP;
		const myIndexVar = initials as ObjectKey;
		return Helper.CODE_STATE[myIndexVar];
	}
}

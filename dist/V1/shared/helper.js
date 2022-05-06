"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
class Helper {
    static getCodeState(initials) {
        const myIndexVar = initials;
        return Helper.CODE_STATE[myIndexVar];
    }
    static getNatOp(initials) {
        const myIndexVar = initials;
        return Helper.NAT_OP[myIndexVar];
    }
}
exports.Helper = Helper;
Helper.VERSION_OF_THE_ISSUANCE_PROCESS = "MIGRATENFe";
Helper.ISSUANCE_PROCESS = 0;
Helper.NON_FACETOFACE_OPERATION_OVER_THE_INTERNET = 2;
Helper.SALE_TO_END_CONSUMER = 1;
Helper.NORMAL_PURPOSE = 1;
Helper.KEY_CHECKER_TYPE = 6;
Helper.NORMAL_ISSUE = 1;
Helper.PORTRAIT_MODE_DANFE = 1;
Helper.DOCUMENT_TEMPLATE = 55;
Helper.CODE_STATE = {
    'RO': 11,
    'AC': 12,
    'AM': 13,
    'RR': 14,
    'PA': 15,
    'AP': 16,
    'TO': 17,
    'MA': 21,
    'PI': 22,
    'CE': 23,
    'RN': 24,
    'PB': 25,
    'PE': 26,
    'AL': 27,
    'SE': 28,
    'BA': 29,
    'MG': 31,
    'ES': 32,
    'RJ': 33,
    'SP': 35,
    'PR': 41,
    'SC': 42,
    'RS': 43,
    'MS': 50,
    'MT': 51,
    'GO': 52,
    'DF': 53
};
Helper.NAT_OP = {
    'J': "VENDA PARA PESSOA JURIDICA",
    'F': "VENDA PARA CONSUMIDOR FINAL"
};
//# sourceMappingURL=helper.js.map
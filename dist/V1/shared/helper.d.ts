export declare abstract class Helper {
    static VERSION_OF_THE_ISSUANCE_PROCESS: string;
    static ISSUANCE_PROCESS: number;
    static NON_FACETOFACE_OPERATION_OVER_THE_INTERNET: number;
    static SALE_TO_END_CONSUMER: number;
    static NORMAL_PURPOSE: number;
    static KEY_CHECKER_TYPE: number;
    static NORMAL_ISSUE: number;
    static PORTRAIT_MODE_DANFE: number;
    static DOCUMENT_TEMPLATE: number;
    private static CODE_STATE;
    private static NAT_OP;
    static getCodeState(initials: String): any;
    static getNatOp(initials: String): any;
}

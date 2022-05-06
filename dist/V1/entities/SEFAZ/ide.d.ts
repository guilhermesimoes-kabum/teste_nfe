import { ParametersToIssuer } from "src/V1/shared/parametersToIssuer.interface";
export declare class ide {
    private parameterToIssuer;
    constructor(parameterToIssuer: ParametersToIssuer);
    cUF: UsignedInt<10>;
    cNF: Number;
    natOp: String;
    indPag: Number;
    mod: Number;
    serie: Number;
    nNF: Number;
    dhEmi: String;
    dhSaiEnt?: String;
    tpNF: Number;
    idDest: Number;
    cMunFG: Number;
    tpImp: Number;
    tpEmis: Number;
    cDV: Number;
    tpAmb: Number;
    finNFe: Number;
    indFinal: Number;
    indPres: Number;
    procEmi: Number;
    verProc: String;
    buildIDE(): void;
    dateFormat(now: Date): String;
}

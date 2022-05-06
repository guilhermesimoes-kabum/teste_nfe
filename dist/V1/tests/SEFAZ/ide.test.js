"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ide_1 = require("../../entities/SEFAZ/ide");
const ParametersToIssueStub_1 = require("../ParametersToIssueStub");
describe('ide', () => {
    let parameterToIssuer;
    let nfeIdentification;
    beforeEach(async () => {
        parameterToIssuer = ParametersToIssueStub_1.ParameterToIssueStub.get();
        nfeIdentification = new ide_1.ide(parameterToIssuer);
    });
    test('parameter is defined', () => {
        expect(parameterToIssuer).toBeDefined();
    });
    test('parameter is defined', () => {
        expect(nfeIdentification).toBeDefined();
    });
    test('currentDate', () => {
        const now = new Date(2022, 3, 14, 10, 4, 32, 100);
        expect(nfeIdentification.dateFormat(now)).toBe("2022-04-14T13:04:32-03:00");
    });
    test('buildIDE', () => {
        let expectIDE = {
            cUF: 32,
            natOp: "VENDA PARA CONSUMIDOR FINAL",
            indPag: 0,
            mod: 55,
            serie: 1,
            nNF: 10,
            tpNF: 1,
            idDest: 2,
            cMunFG: 3205101,
            tpImp: 1,
            tpEmis: 1,
            tpAmb: 2,
            cDV: 6,
            finNFe: 1,
            indFinal: 1,
            indPres: 2,
            procEmi: 0,
            verProc: "MIGRATENFe",
            cNF: nfeIdentification.cNF,
            dhEmi: nfeIdentification.dhEmi,
            parameterToIssuer: parameterToIssuer
        };
        expect(nfeIdentification).toEqual(expectIDE);
    });
});
//# sourceMappingURL=ide.test.js.map
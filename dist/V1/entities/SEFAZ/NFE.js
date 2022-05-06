"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFE = void 0;
const ide_1 = require("./ide");
class NFE {
    constructor(taxation, parameterToIssuer) {
        this.taxation = taxation;
        this.parameterToIssuer = parameterToIssuer;
        this.generateMandatoryGroups();
    }
    ;
    generateMandatoryGroups() {
        this.ide = new ide_1.ide(this.parameterToIssuer);
    }
}
exports.NFE = NFE;
//# sourceMappingURL=NFE.js.map
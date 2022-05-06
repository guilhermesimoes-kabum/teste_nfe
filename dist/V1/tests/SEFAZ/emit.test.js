"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emit_1 = require("../../entities/SEFAZ/emit");
describe('emit', () => {
    let issuer;
    beforeEach(async () => {
        issuer = new emit_1.emit();
    });
    test('issuer is defined', () => {
        expect(issuer).toBeDefined();
    });
});
//# sourceMappingURL=emit.test.js.map
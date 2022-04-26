import {emit} from "../../entities/SEFAZ/emit";

describe('emit', () => {
	let issuer : emit;

	beforeEach(async () => {
		issuer = new emit();
	});

	test('issuer is defined', () => {
		expect(issuer).toBeDefined();
	});
})

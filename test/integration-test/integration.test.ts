import {INestApplication} from "@nestjs/common";
import {Test, TestingModule} from "@nestjs/testing";
import {ResponseInvoicyStub} from "src/V1/infra/gateway/invoicy/responseInvoicyStub";
import {V1Module} from "src/V1/infra/v1.module";
import supertest = require("supertest");
import {configMysqlQA} from "../../database.provider";
import {KbNotasfiscaisAliquotaICMSestaado} from "../../src/V1/infra/repositories/entities/KbNotasfiscaisAliquotaICMSestado";

describe('integration', () => {

	let app: INestApplication;

  	beforeEach(async () => {
  	  const moduleFixture: TestingModule = await Test.createTestingModule({
  	    imports: [V1Module],
  	  }).compile();

  	  app = moduleFixture.createNestApplication();
  	  await app.init();
  	});

	test('POST invoicy', async() => {
		const response = await supertest(app)
			.get(' -- request invoicy -- ');
		expect(response.statusCode).toEqual(200)
		expect(response.body).toEqual(ResponseInvoicyStub)
	});	

	test('Repository', async () => {
		const kbNotasFiscaisAliICMSestado = configMysqlQA.getRepository(KbNotasfiscaisAliquotaICMSestaado); 
		const response = kbNotasFiscaisAliICMSestado.findOneBy({
			uf_destino : 'SP',
			uf_origem : 'ES'
		}); 

		expect((await response).aliquota).toEqual(12);

	});
});

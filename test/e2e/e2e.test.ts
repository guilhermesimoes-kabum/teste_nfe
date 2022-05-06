import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { V1Module } from './../../src/V1/infra/v1.module';

describe('e2e', () => {
	let app: INestApplication;

  	beforeEach(async () => {
  	  const moduleFixture: TestingModule = await Test.createTestingModule({
  	    imports: [V1Module],
  	  }).compile();

  	  app = moduleFixture.createNestApplication();
  	  await app.init();
  	});

  	test('/ (POST) -- test if router is validty', () => {
  	  return request(app.getHttpServer())
  	    .post('/')
  	    .expect(200)
  	  	  .expect({
  	  		xml_link : "https://homolog.invoicy.com.br///HNUC002.aspx?gvjBbcQmIWIxjpfkKLR/NxZJw95HgnHfd+/xEdFubtA=",
  	  		pdf_link : "https://homolog.invoicy.com.br///DownloadPDF.aspx?gvjBbcQmIWIxjpfkKLR/N1/1Tw5AtW26EMMuyoXOe8w=",
  	  		xml_base64 : "",	
  	  		pdf_base64 : "",	
  	  		statusCode : "100",
  	  		mensagem : "Autorizado o uso da NF-e",
  	  	  });
  	});
});

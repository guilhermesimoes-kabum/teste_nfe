import {ParametersToEmission} from "src/V1/shared/parametesToEmission.interface"

export class ParameterToEmissionStub {
	static get(): ParametersToEmission {
		return {
			"order": {
				"codigo": 28220798,
				"data_garantia": 1644853989,
				"cd_codigo": 3,
				"id_cliente": "Kbay1.EybbUFQKbIysZvqD8UK.1470077315KbDczIOHf7VgM",
				"nf_numero": 13443543,
				"pedido_obs": "",
				"pedido_origem": 0,
				"frete_codigo": 35,
				"frete_volumes": 1,
				"frete_volumes_alterado_em": 1644854608,
				"valor_desconto": 0.31,
				"valor_credito": 0.00,
				"valor_frete": 5.99,
				"valor_total": 11.81,
				"pagamento_codigo": 98,
				"pagamento_data": 1644854190,
				"endereco_logradouro": "RUA CONSELHEIRO SARAIVA",
				"endereco_referencia": "Do lado do petshop",
				"endereco_bairro": "CENTRO",  
				"endereco_cidade": 4767,
				"endereco_cep": 13480191,
				"total_geral": 11.81,
				"valor_juros": 0.00,
				"pagamento_parcelamento": 1,
				"pagamento_categoria": "pix"
			},
			"issuer": {
			   "cnpj": "05570714000825",
			   "referencia": "CD - VIANA (ES)",
			   "emissao_por_filial_virtual" : false,
			   "filial_vitual" : null,
			   "IE": 083078665,
			   "IM" : 21699,
			   "LOGRADOURO": "ROD BR-262",
			   "NUMERO": 222,
			   "COMPLEMENTO": "GALPAO: 2; ARMZ: 3 4 E 5;",
			   "BAIRRO": "VILA BETHANIA",
			   "MUNICIPIO_CODIGO": 3205101,
			   "MUNICIPIO_NOME": "VIANA",
			   "UF": "ES",
			   "CEP": 29136010, 
			   "IEST": 0808010466118
			},
			"shipping_company": {
				"ie": 165460600113,
				"observacaoNF": "RESPONSAVEL: LOCAL ENTREGA: GFL, CNPJ: 23.820.639/0001-19,  Estra Guarulhos-Sao Miguel Velha, 0, Terminal Interm. de cargas, Vila Nova Cumbica - Guarulhos SP/SP - Mediante contrato: 9912323353",
				"cep": "05346000", 
				"fantasia": "GFL",
				"cnpj": 23820639000119,
				"razaoSocial": "GFL"
			},
			"client": {
				"codigo": 3050386,
				"data": 1470077315,
				"loja_codigo": 1,
				"id_cliente": "Kbay1.EybbUFQKbIysZvqD8UK.1470077315KbDczIOHf7VgM",
				"cliente_email": "trintaeoitogc@gmail.com",
				"cliente_pessoa": "F",
				"cliente_sexo": "M",
				"cliente_nome": "Guilherme Giácomo Simões",
				"cliente_razao_social" : "",
				"cliente_cpf_cnpj": 43926863889,
				"cliente_nascimento": "1996-01-15",
				"cliente_telefone_01" : 1836310908,
				"cliente_telefone_02" : 18988181150,
				"cliente_credito": 0.00
			},
			"transfer": false,
			"items": [ 
				{
				    "item_quantidade": 1,
				    "produto_codigo": 114561,
				    "produto_nome_nfe": "CABO HUSKY TECHNOLOGIES, PRETO, USB-A X MICRO USB, 1 METRO - ARGA008",
				    "valor_unitario": 5.82,
				    "produto_ean": 7908222401304,
				    "item_openbox": "N",
					"mercadoria_codigo" : 0,
				    "brinde" : 0, 
				    "produto_ncm": 85442000, 
				    "produto_especie": 0, 
				    "codigo_produto": 114561, 
				    "mercadoria_serie": null, 
				    "aliquota_nacional": 23.56, 
				    "produto_garantia": 7776000, 
				    "item_peso": 30, 
				    "fabricante": 2813, 
				    "estado": "SP",
					"orig_cst": 0,
					"orig_cst_fornecedor": 1 
				}
			],
			"delivery_city": {
				"estado": "SP",
				"cidade": "Limeira",
				"ibge": 3526902
			}
		}
	}
}

/*
 *
-- ORDER
SELECT 
	pedido.codigo,
	pedido.data_garantia,
	pedido.cd_codigo,
	pedido.id_cliente,
	pedido.nf_numero,
	pedido.pedido_obs,
	pedido.pedido_origem,
	pedido.frete_codigo,
	pedido.frete_volumes,
	pedido.frete_volumes_alterado_em,
	pedido.valor_desconto,
	pedido.valor_credito,
	pedido.valor_frete,
	pedido.valor_total,
	pedido.pagamento_codigo,
	pedido.pagamento_data,
	pedido.endereco_logradouro,
	pedido.endereco_referencia,
	pedido.endereco_bairro,
	pedido.endereco_cidade,
	pedido.endereco_cep,
	pedido.total_geral,
	pedido.valor_juros,
    pagamentos.parcelamento AS pagamento_parcelamento, 
    pagamentos.categoria AS pagamento_categoria
FROM kb_pedidos as pedido 
    INNER JOIN kb_pagamentos pagamentos ON (pedido.pagamento_codigo = pagamentos.codigo)
WHERE 
    pedido.id_pedido = 'KbN3VutufPnLUKbCBHQ.vhheyA1644853989Kbay1.EybbUFQKbIysZvqD8UK.1470077315KbDczIOHf7VgM3e8cc6f2-a222-4bf4-a72d-fc2946fa9941'
LIMIT 1;


-- ISSUER
SELECT 
    gk_cd.cnpj,
    gk_cd.referencia,
    gk_cd.emissao_por_filial_virtual,
    gk_cd.filial_vitual,
    nfe_empresa.IE,
    nfe_empresa.IM,
    nfe_empresa.LOGRADOURO,
    nfe_empresa.NUMERO,
    nfe_empresa.COMPLEMENTO,
    nfe_empresa.BAIRRO,
    nfe_empresa.MUNICIPIO_CODIGO,
    nfe_empresa.MUNICIPIO_NOME,
    nfe_empresa.UF,
    nfe_empresa.CEP,
    cd_estado.ie as IEST
FROM gk_cd AS gk_cd
	INNER JOIN GK_NFE_EMPRESA AS nfe_empresa ON (nfe_empresa.CNPJ = gk_cd.cnpj)
	LEFT JOIN gk_cd_estado AS cd_estado ON (cd_estado.codigo_cd = gk_cd.codigo AND cd_estado.estado = ?)
WHERE gk_cd.codigo = ?
	LIMIT 1;




-- SHIPPING COMPANY
SELECT 
    operador.razao_social,
    operador.fantasia,
    operador.cnpj,
    operador.ie,
    operador.observacao_nf,
    operador.cep
FROM 
    kb_frete_operadores_dados as operador
	INNER JOIN kb_frete AS frete ON (frete.operador_codigo = operador.codigo)
WHERE 
	frete.codgo = ?;
                                         
                                                 

-- CLIENTE 
SELECT 
	codigo,
	data,
	loja_codigo,
	id_cliente,
	cliente_email,
	cliente_pessoa,
	cliente_sexo,
	cliente_nome,
	cliente_razao_social,
	cliente_cpf_cnpj,
	cliente_nascimento,
	cliente_telefone_01,
	cliente_telefone_02,
	cliente_credito
FROM 
    kb_clientes 
WHERE 
    id_cliente = 'Kbay1.EybbUFQKbIysZvqD8UK.1470077315KbDczIOHf7VgM';

                                               

                                       
-- ITEMS                                             
SELECT
   pi.item_quantidade, 
   pi.produto_codigo, 
   pr.produto_nome_nfe, 
   pi.valor_unitario, 
   pr.produto_ean, 
   pi.item_openbox, 
   pi.mercadoria_codigo, 
   pi.brinde,
   pr.produto_ncm, 
   pr.produto_especie, 
   pr.codigo as codigo_produto, 
   pr.produto_garantia, 
   pi.item_peso, 
   pr.fabricante, 
   cidade.estado,
   pr.menu, 
   estoque_mercadoria.mercadoria_serie
FROM 
   kb_pedidos_itens pi 
   LEFT JOIN kb_produtos pr ON (pr.codigo = pi.produto_codigo) 
   LEFT JOIN kb_pedidos pedido ON (pi.id_pedido = pedido.id_pedido)
   LEFT JOIN kb_site_cidades cidade ON (pedido.endereco_cidade = cidade.codigo)
   LEFT JOIN kb_estoque_mercadorias estoque_mercadoria ON (estoque_mercadoria.posicao = pedido.id_pedido AND estoque_mercadoria.produto_codigo = pr.codigo)
WHERE 
   pi.id_pedido = ?
   AND (pi.produto_especie = 0 OR (pi.produto_especie = 1 AND pi.produto_codigo <= ?)) 
ORDER BY 
   pi.codigo ASC;
                                        
                                       
                          
                          
-- DELIVERY 
select estado, cidade, ibge 
from kb_site_cidades where codigo = ?;                                      
                                         
                                            
                                             
                                                
                                              
 * */

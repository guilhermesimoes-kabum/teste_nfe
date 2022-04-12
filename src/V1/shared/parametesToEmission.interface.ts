export interface Order {
	codigo: Number;
	data_garantia: Number;
	cd_codigo: Number;
	id_cliente: String;
	nf_numero: Number;
	pedido_obs: String;
	pedido_origem: Number;
	frete_codigo: Number;
	frete_volumes: Number;
	frete_volumes_alterado_em: Number;
	valor_desconto: Number;
	valor_credito: Number;
	valor_frete: Number;
	valor_total: Number;
	pagamento_codigo: Number;
	pagamento_data: Number;
	endereco_logradouro: String;
	endereco_referencia: String;
	endereco_bairro: String;
	endereco_cidade: Number;
	endereco_cep: Number;
	total_geral: Number;
	valor_juros: Number;
	pagamento_parcelamento: Number;
	pagamento_categoria: String;
}

export interface CD {
   cnpj : String;
   referencia : String;
   emissao_por_filial_virtual? :  Boolean;
   filial_vitual? : Number;
   IE : Number;
   IM? : Number;
   LOGRADOURO : String;
   NUMERO : Number;
   COMPLEMENTO : String;
   BAIRRO : String;
   MUNICIPIO_CODIGO : Number;
   MUNICIPIO_NOME : String;
   UF : String;
   CEP : Number;
   IEST: Number
}

export interface Client {
	codigo : Number;
	data : Number;
	loja_codigo : Number;
	id_cliente : String;
	cliente_email : String;
	cliente_pessoa : String;
	cliente_sexo : String;
	cliente_nome : String;
	cliente_razao_social? : String;
	cliente_cpf_cnpj : Number;
	cliente_nascimento : String;
	cliente_telefone_01? : Number;
	cliente_telefone_02? : Number;
	cliente_credito : Number;
}

export interface ShippingCompany {
	ie?: Number;
	observacaoNF?: String;
	cep?: String;
	fantasia?: String;
	cnpj: Number;
	razaoSocial?: String;
}

export interface Item {
    item_quantidade : Number;
    produto_codigo : Number;
    produto_nome_nfe : String;
    valor_unitario : Number;
    produto_ean : Number;
    item_openbox : String;
	mercadoria_codigo? : Number;
    brinde? : Number; 
    produto_ncm : Number; 
    produto_especie : Number; 
    codigo_produto : Number; 
    mercadoria_serie : Number; 
    aliquota_nacional : Number; 
    produto_garantia : Number; 
    item_peso : Number; 
    fabricante : Number; 
    estado : String;
	orig_cst : Number;
	orig_cst_fornecedor: Number;
}

export interface DeliveryCity {
	estado: String;
	cidade: String;
	ibge:  Number;
}

export interface ParametersToIssuer {
	order: Order;
	issuer: CD;
	shippingCompany: ShippingCompany;
	client: Client;
	transfer: Boolean;
	items: Array<Item>;
	deliveryCity: DeliveryCity;
}

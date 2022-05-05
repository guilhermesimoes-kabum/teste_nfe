import {TaxationInterface} from "./TaxationInterface";

interface Order {
	codigo: number;
	data_garantia: number;
	cd_codigo: number;
	id_cliente: string;
	nf_numero: number;
	pedido_obs: string;
	pedido_origem: number;
	frete_codigo: number;
	frete_volumes: number;
	frete_volumes_alterado_em: number;
	valor_desconto: number;
	valor_credito: number;
	valor_frete: number;
	valor_total: number;
	pagamento_codigo: number;
	pagamento_data: number;
	endereco_logradouro: string;
	endereco_referencia: string;
	endereco_bairro: string;
	endereco_cidade: number;
	endereco_cep: number;
	total_geral: number;
	valor_juros: number;
	pagamento_parcelamento: number;
	pagamento_categoria: string;
}

interface CD {
    cnpj : string;
    referencia : string;
    emissao_por_filial_virtual? :  Boolean;
    filial_vitual? : number;
    IE : string;
    IM? : number;
    LOGRADOURO : string;
    NUMERO : number;
    COMPLEMENTO : string;
    BAIRRO : string;
    MUNICIPIO_CODIGO : number;
    MUNICIPIO_NOME : string;
    UF : string;
    CEP : number;
	IEST: string; 
}

interface Client {
	codigo : number;
	data : number;
	loja_codigo : number;
	id_cliente : string;
	cliente_email : string;
	cliente_pessoa : string;
	cliente_sexo : string;
	cliente_nome : string;
	cliente_razao_social? : string;
	cliente_cpf_cnpj : number;
	cliente_nascimento : string;
	cliente_telefone_01? : number;
	cliente_telefone_02? : number;
	cliente_credito : number;
}

interface ShippingCompany {
	ie?: string;
	observacaoNF?: string;
	cep?: string;
	fantasia?: string;
	cnpj: number;
	razaoSocial?: string;
}

interface Item {
    item_quantidade : number;
    produto_codigo : number;
    produto_nome_nfe : string;
    valor_unitario : number;
    produto_ean : number;
    item_openbox : string;
	mercadoria_codigo? : number;
    brinde? : number; 
    produto_ncm : number; 
    produto_especie : number; 
    codigo_produto : number; 
    mercadoria_serie : number; 
    aliquota_nacional : number; 
    produto_garantia : number; 
    item_peso : number; 
    fabricante : number; 
    estado : string;
	orig_cst : number;
	orig_cst_fornecedor: number;
}

interface DeliveryCity {
	estado: string;
	cidade: string;
	ibge:  number;
}

export enum typeTaxation {
	ISSUER_KABUM_ORDER, 
	TRANF_KABUM,
	OTHERS_INPUTS
}

export interface ParametersToIssuer {
	order: Order;
	issuer: CD;
	shippingCompany: ShippingCompany;
	client: Client;
	items: Array<Item>;
	deliveryCity: DeliveryCity;
	serie: number;
	nNF: number;
	debug: boolean;
	typeOperation : number;
	taxation? : TaxationInterface;
	typeTaxation : typeTaxation;
}

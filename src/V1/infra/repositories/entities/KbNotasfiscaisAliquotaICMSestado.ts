import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity('kb_notasfiscais_aliquota_icms_estado')
export class invoiceAliquotICMSstate extends BaseEntity {

	@PrimaryColumn()
	codigo : number;

	@Column()
	uf_origem : string;

	@Column()
	uf_destino : string;

	@Column()
	aliquota : number;
}

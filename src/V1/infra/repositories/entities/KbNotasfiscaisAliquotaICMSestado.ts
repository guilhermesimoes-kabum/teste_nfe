import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity('kb_notasfiscais_aliquota_icms_estado')
export class invoiceAliquotICMSstate extends BaseEntity {

	@PrimaryColumn("codigo")
	code: number;

	@Column("uf_origem ")
	stateOfOrigin: string;

	@Column("uf_destino")
	destinationState: string;

	@Column("aliquota")
	aliquot: number;
}

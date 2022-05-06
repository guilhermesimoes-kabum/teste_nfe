import "reflect-metadata"
import { DataSource } from "typeorm"
import {KbNotasfiscaisAliquotaICMSestaado} from "./src/V1/infra/repositories/entities/KbNotasfiscaisAliquotaICMSestado";

export const configMysqlQA = new DataSource({
    type: "mysql",
    host: "gkt-aurora-ecom-qa-instance-cluster.cluster-chxpadil0npm.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "guilherme.simoes",
    password: "74okuj79hyyyY",
    database: "gk",
    synchronize: true,
    logging: false,
    entities: [KbNotasfiscaisAliquotaICMSestaado],
    migrations: [],
    subscribers: [],
})

import {createConnection} from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'gkt-aurora-ecom-qa-instance-cluster.cluster-chxpadil0npm.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'guilherme.simoes',
      password: '74okuj79hyyyY',
      database: 'gk',
      entities: [
          __dirname + '/../**/*Entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];

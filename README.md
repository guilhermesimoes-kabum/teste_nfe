# NFE architecture KaBuM!

## Description
This repository is the initial build architecture for the issuer invoicy system.
The think is to keep every business rule fully decoupled. Then, we build this architecture with bound and unbound directories separated. <br>
We abstract all files that communicate with the ORM, Framewaor and Other API with a interface (Repository, Controllers, Issuer Communication ... ). <br>
The directories are separated (decoupled and coupled) why if we move this business rule to other project, is only move the decoupled directories, without dificcult, only Control - C + Control - V.


## Architecture 
```
|_ domain/           //Deepest Layer of the project, she has not knowledge of anything but herself
	|_ adapter/      //Adapters to 'normalize' and mapped data to differents interfaces
	|_ entities/     //Rules espcified business
	|_ interface/    //Interfaces for abstract modules
	|_ helper.ts     
|_ infra             //Dirty Layer. This layer contain files what comunicate with outside
	|_ gateway/      //Gateway storage files what communicate with outside trough requests apis
	|_ repositories/ //Communication with ORM
	|_ facade.ts 
	|_ nfe.controller.ts
	|_ v1.module.ts
|_ usescases             //Layer the business rule
	|_nfesale.service.ts
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```


## Author 

- Author - [Guilherme Giácomo Simões](https://github.com/guilhermesimoes-kabum) and [Ana Paula](https://github.com/anapaulakabum/)

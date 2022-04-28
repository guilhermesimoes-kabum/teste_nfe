# NFE architecture KaBuM!

## Description
This repository is the initial build architecture for the issuer invoicy system.
The think is to keep every business rule fully decoupled. Then, we build this architecture with bound and unbound directories separated. <br>
We abstract all files that communicate with the ORM, Framewaor and Other API with a interface (Repository, Controllers, Issuer Communication ... ). <br>
The directories are separated (decoupled and coupled) why if we move this business rule to other project, is only move the decoupled directories, without dificcult, only Control - C + Control - V.


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

- Author - [Guilherme Giácomo Simões](https://github.com/guilhermesimoes-kabum) [Ana Paula](https://github.com/anapaulakabum/)

# NFE architecture KaBuM!

## Description
This repository is the initial build architecture for the issuer invoicy system.
The think is to keep every business rule fully decoupled. Then, we build this architecture with bound and unbound directories separated. <br>
We abstract all files that communicate with the ORM, Framewaor and Other API with a interface (Repository, Controllers, Issuer Communication ... ). <br>
The directories are separated (decoupled and coupled) why if we move this business rule to other project, is only move the decoupled directories, without dificcult, only Control - C + Control - V.


## Architecture 
```
|_ domain/           //Deepest Layer of the project, it has not knowledge of anything but herself
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

## Contribute 
**Send Changes**<br>
Fork the project, create the brahch git flow format. Example: <br>
NEW FEATURE:<br>
`feature/implementation_the_gateway`<br>
Declare the name branch with snake_case. Must be like this because its easier to read. <br>
Look this:
SNAKE_CASE <br>
`implementation_the_gateway`<br>
CAMEL_CASE<br>
`implementationTheGateway`<br>
Wich of the two is more confortable to read?<br>
Before create branch, and do your changes, you open the PR <br><br>

**Code Style**<br>
The file name must be written in CamelCase (Words separated with capital latters). Exemple: <br>
GOOD<br>
`NFeRepositoryInterface.pm`<br>
BAD<br>
`nfe_repository_interface.pm`<br> 
Must be like this because all functions of the node.js is CamelCase and we do not mix differents ways to write. <br>

The ENUMS and CONSTANTS must be have declared with capital latters and words separated with _ (underscore) <br>
Example:<br>
`THIS_IS_A_CONSTANT`<br>

The ifs must be have declared with spacing between closed parentheses and without spacing after `if` and between parentheses and condition. <br>
Example:<br>
`if(condition) { ... }`

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

**Writing tests**<br>
Never use a it() in tests of the Jest. Instead of use test(). The reason is simple and obvious: The test() is more intuitive.
 

## Author 

- Author - [Guilherme Giácomo Simões](https://github.com/guilhermesimoes-kabum) and [Ana Paula](https://github.com/anapaulakabum/)

import {Module} from "@nestjs/common";
import {NFeController} from "./nfe.controller";

@Module({
	imports: [], 
	controllers: [NFeController], 
	providers: []
})

export class V1Module {}

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport'
import {Strategy} from 'passport-local'

//without using jwtBearer token aunthentication
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(){
        super()
    }

    async validate(username: String,Password: String):Promise<any>{
        return 'success';
    }
}
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            // jwtFromRequest specifies how to extract the JWT token from the request. In this case, it extracts the token from the authorization header using the fromAuthHeaderAsBearerToken() method.
            jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),

            ignoreExipration: false,

            //secret key used to sign and verify the JWT token
            secretOrKey: 'hello'
            
        })
    }
    async validate(username: String,Password: String):Promise<any>{
        return 'success'
    }
}
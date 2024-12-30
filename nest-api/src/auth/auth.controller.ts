import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";

@Controller('auth')
export class AuthController {
    // construtor
    constructor(private authService: AuthService) {}

    // 
    @Post('signup')
    signup(@Body() dto: AuthDTO) { 
       
        return this.authService.signup();
    }

    @Post('signin')
    signin() { 
        return this.authService.signin();
    }



}



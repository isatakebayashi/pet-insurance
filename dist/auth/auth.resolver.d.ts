import { AuthService } from "./auth.service";
import { AuthInput } from "./dto/auth.input";
import { AuthType } from "./dto/auth.type";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(data: AuthInput): Promise<AuthType>;
}

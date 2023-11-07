import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class GuardService implements CanActivate{

    constructor(private loginService: LoginService, private loginRouter: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.isAuthenticated()){
            return true;
        }
        else{
            this.loginRouter.navigate(['login']);
            return false;
        }
    }

}
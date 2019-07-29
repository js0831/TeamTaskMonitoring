import {
    CanActivate,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
    Router
} from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/pages/login/login.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {

    loginService: LoginService;
    constructor(
        private injector: Injector,
        private router: Router
    ) {
        this.loginService = this.loginService || this.injector.get(LoginService);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable < boolean > | Promise < boolean > | boolean {

        return this.loginService.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                }
            }
        );
    }
}

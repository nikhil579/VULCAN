import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService implements Resolve<any>
{
    user: any = {};
    userRole: any = {};
    token: string = '';
    uri = environment.platform_api_protocol + environment.platform_api_url + '/api';

    constructor(
        private http: HttpClient,
        private router: Router
    )
    {
    }

    getLoggedInUserInfo () {
    }

    login(email_string, password_string): Observable <any> {
        var obj = {
                username:email_string,
                password:password_string,
                brokerId:"0012w00000CSQD6AAP",
                type:"User",
                isGoogleOrFacebookAuthentication: false
        };
        return this
            .http
            .post(`${this.uri}/auth/login`, obj)
    }

    logOut() {

        this.user = {};
        this.userRole = {};
        this.token = '';
        this.router.navigate ( ['login'] );
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {}
}
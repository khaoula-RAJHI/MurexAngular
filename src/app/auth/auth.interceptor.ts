import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
         {
            // add authorization header with jwt token if available
            const currentUser = localStorage.getItem('token');
            {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
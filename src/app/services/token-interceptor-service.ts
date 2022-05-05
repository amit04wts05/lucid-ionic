import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const API_KEY = localStorage.getItem("token");
        if(API_KEY){
            return next.handle(httpRequest.clone({ setHeaders: { authorozation: API_KEY } }));
        }else{
            return next.handle(httpRequest);
        }

    
      }
    }
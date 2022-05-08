import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Origin, Accept,Authorization,Content-Length, X-Requested-With',
      'Content-Type': 'application/json',
    };
    let authtoken = JSON.parse(localStorage.getItem('_user'));
    if (authtoken?.token) {
      headers['Authorization'] = `Bearer ${authtoken?.token}`;
    }
    return next.handle(httpRequest.clone({ setHeaders: headers }));
  }
}

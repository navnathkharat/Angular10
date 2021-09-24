import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  //Line no - 20/21/22 are optional
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      setHeaders:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuYXZuYXRoMSIsImVtYWlsIjoibmF2bmF0aDFAZ21hbWlsLmNvbSIsImp0aSI6IjUzYjI5NzA3LTM3NmItNDZmNi05MzA4LTJmMzdkMjFhYWZlMCIsIlVzZXJJRCI6IjIiLCJleHAiOjE2MzI0ODI2NzYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzA3LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzA3LyJ9.ZI2fxCh4kV8srWEIktyUS5L_Z45F_Tc9DtF09NhVapA`,
        'Access-Control-Allow-Origin': '*',
        'Accept':'application/json',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      }            
    });
    return next.handle(newRequest);
  }
}

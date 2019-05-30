import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { exhaustMap, finalize, mergeMap, switchMap, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.isLoggedIn$.pipe(
      take(1),
      switchMap(isLogged => isLogged ? next.handle(req.clone({
        setHeaders: {
          Authorization: "Bearer " + this.authService.token
        }
      })) : next.handle(req) ),
      tap(console.log)
    );
  }
}

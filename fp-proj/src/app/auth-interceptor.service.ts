import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  token = null;
  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.token = isLoggedIn ? this.authService.token : null
      }
    )
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let changedReq = this.token ? req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.token
      }
    }) : req;

    return next.handle(changedReq);
  }
}

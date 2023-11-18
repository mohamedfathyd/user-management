import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject, pipe } from 'rxjs';

import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  refresh_token: string;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let authToken: string = localStorage.getItem('userToken');
    if (localStorage.getItem('userToken') != null)
      authToken = localStorage.getItem('userToken');

    return next.handle(this.addTokenToRequest(req, authToken)).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>err).status) {
            case 401:
              return <any>this.handle401Error(req, next);
            case 400:
              return throwError(err);
          }
        } else {
          return throwError(err);
        }
      })
    );
  }
  private addTokenToRequest(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        language: localStorage.getItem('language'),
      },
    });
  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.tokenSubject.next(null);
      catchError((err) => {
        return err;
      }),
        finalize(() => {
          this.isRefreshingToken = false;
        });
    }
  }
}

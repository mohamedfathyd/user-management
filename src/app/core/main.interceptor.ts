import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HomeScreenService } from '../pages/homeScreen/servcies/homeScreen.service';


@Injectable()
export class MainInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  refresh_token: string;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private router: Router, private servcies: HomeScreenService) {}

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
      let body = {
        refreshToken: localStorage.getItem('refresh_token'),
      };
      return this.servcies.refreshToken(body).pipe(
        switchMap(
        (data: any) => {
            if (data) {
            this.tokenSubject.next(data.data.token);
            localStorage.setItem('userToken', data.data.token);
            localStorage.setItem('refresh_token', data.data.refreshToken);
            return next.handle(
              this.addTokenToRequest(request, data.data.token )
            );
          }
          localStorage.clear();
          this.router.navigateByUrl('/');
          return;
        }),
        catchError((err) => {
          localStorage.clear();
          this.router.navigateByUrl('/');
          return err;
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        }));
    }
  }
}

import { ToastrService } from 'ngx-toastr';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InboundInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map(response => {
        return response;
      }),
      catchError(
        (error): Observable<HttpEvent<any>> => {
          if (error.status === 401) {
          } else if (error.status >= 500) {
            return this.handleErrorDefault(request, next);
          } else {
            return next.handle(request);
          }
        }
      )
    );
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.router.navigate(['/auth', 'login']);
    return next.handle(request);
  }

  handleErrorDefault(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.toastr.error('Oops... Something went wrong!');
    return next.handle(request);
  }
}

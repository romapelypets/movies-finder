import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  activeRequests: number = 0;
  /**  URLs for which the loading screen should not be enabled */
  skippUrls = [];

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (this.authService.isAuthenticated()) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: 'Bearer ' + this.authService.getToken()
    //     }
    //   });
    // }
    return next.handle(request);
  }
}

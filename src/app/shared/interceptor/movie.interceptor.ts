import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest = request.clone({
      headers: request.headers.set('x-rapidapi-key', '042f9f1b4emsh427b347f85af1c7p12501bjsnf1fb22a287c3')
    });
    console.log(modifiedRequest);
    return next.handle(modifiedRequest);
  }
}

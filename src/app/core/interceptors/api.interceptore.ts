import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  console.log('HTTP request', request.url);
  const updatedRequest = request.clone({
    setHeaders: {
      'X-Client': 'angular-storefront'
    },
  });

  return next(updatedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(
        'HTTP request failed:',
        error.status,
        error.message,
      );

      return throwError(() => error);
    })
  );
}

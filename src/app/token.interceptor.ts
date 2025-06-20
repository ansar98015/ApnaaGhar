import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, 
HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let request = req.clone({
    withCredentials: true,
    // setHeaders: {
    //   token: 'JWT@apnaaGhar2025'
    // }
  })

  return next(request).pipe(

    tap((evt: HttpEvent<any>) => { 
      if (evt instanceof HttpResponse) { 
        if (evt && evt.body) { 
          if (evt['body']['IsError'] && evt['body']['Message'] === 'Invalid user session.') { 
            // Here will be signOut method.
          }
        } 
      } 
    }),

    catchError((err: HttpHeaderResponse) => { 
      if (err instanceof HttpErrorResponse) { 
        if (err.status === 401 || err.status === 0) { 
          // Here will be signOut method. 
        } 
      } 
      return throwError(()=> err);
    })

  )
}
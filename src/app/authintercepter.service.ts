import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInteceptorService implements HttpInterceptor {
  constructor(private authService: AuthService){}

  intercept(req, next){
      var authRequest = req.clone({
          headers: req.headers.set('Authorization', 'token ' + this.authService.token)
      })
      return next.handle(authRequest);
  }
}

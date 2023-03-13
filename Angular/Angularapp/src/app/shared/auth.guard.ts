import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginserviceService } from '../user/service/authenticationService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: LoginserviceService, private route: Router) {
  }
  canActivate() {
    if (this.service.isLoginUser())
      return true;
    else
      this.route.navigate(['login']);
    return false;
  }
}

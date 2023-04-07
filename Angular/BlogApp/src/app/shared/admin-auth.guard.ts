import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginserviceService } from '../user/service/authenticationService.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private service: LoginserviceService, private route: Router) {
  }
  canActivate() {
    if (this.service.isRoleAdmin()) {
      //this.route.navigate(['admin-dashboard']);
      return true;
    }
    else {
      this.route.navigate(['user-dashboard']);
      return false;
    }
  }
}

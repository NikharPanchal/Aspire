import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginserviceService } from '../user/service/authenticationService.service';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private service: LoginserviceServiceServer, private route: Router) {
  }
  canActivate() {
    if (this.service.isRoleAdmin()) {
      this.route.navigate(['admin-dashboard']);
      return true;
    }
    else {
      this.route.navigate(['user-dashboard']);
      return false;
    }
  }
}

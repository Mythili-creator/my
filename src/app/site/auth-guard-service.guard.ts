import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "../services/authentication-service.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardServiceGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isLogged()) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }

  constructor(public router: Router, private service: AuthServiceService) {}
}

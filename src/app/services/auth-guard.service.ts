import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private navCtr: NavController
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let authtoken = JSON.parse(localStorage.getItem('_user'));
    if (!authtoken?.token) {
      // alert("xvcxv")
      // this.router.navigate([''], { queryParams: { retUrl: route.url } });
      this.navCtr.navigateRoot(['']);
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { UserRole } from 'src/model/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (!this.auth.getUserInfo() ||
      (next.data.roles && !this.hasAuth(next.data.roles as UserRole[], this.auth.getUserInfo().roles))) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }

  hasAuth(neededRoles: UserRole[], userRoles: UserRole[]) {
    return neededRoles.every(role =>
      userRoles.findIndex(roleToFind => role === roleToFind) !== -1
    );
  }
}

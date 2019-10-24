import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserInfo } from 'src/model/user-info';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userInfo: UserInfo;

  constructor() { }

  getUserInfo(): UserInfo {
    return this.userInfo;
  }

  loginAsFighter() {
    return of('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzE5NDU4NzcsImV4cCI6MTYwMzQ4MTg3NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlcyI6IlJPTEVfRklHSFRFUiJ9.itd6R_hUfGaIEx2AAbe2ZbvuDbjPJ1_PQjSLwIqOAsg')
      .pipe(
        map(this.parseJWTToken),
        map(info => {
          if (typeof info.roles === 'string') {
            info.roles = [info.roles];
          }
          return info;
        }),
        tap(info => { this.userInfo = info; })
        );
  }

  loginAsAdmin() {
    return of('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzE5NDU4NzcsImV4cCI6MTYwMzQ4MTg3NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlcyI6IlJPTEVfQURNSU4ifQ.TEzt9dZFE2TFWmy9EEfeaddfA4V4gVWHQwqtfiiVvxg')
      .pipe(
        map(this.parseJWTToken),
        map(info => {
          if (typeof info.roles === 'string') {
            info.roles = [info.roles];
          }
          return info;
        }),
        tap(info => { this.userInfo = info; })
        );
  }


  parseJWTToken(token: string): any {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
          '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      return JSON.parse(jsonPayload);
  }
}

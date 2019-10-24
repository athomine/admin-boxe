import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginAsBoxer() {
    this.authService.loginAsFighter()
      .subscribe(() => {
        this.router.navigate(['/boxer']);
      });
  }

  loginAsAdmin() {
    this.authService.loginAsAdmin()
      .subscribe(info => {
        this.router.navigate(['/admin']);
      });
  }

}

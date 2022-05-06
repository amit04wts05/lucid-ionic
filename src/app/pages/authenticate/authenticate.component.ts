import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { LoaderService } from 'src/app/services/loader-service';

@Component({
  templateUrl: 'authenticate.component.html',
  styleUrls: ['authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit, OnDestroy {
  id: any;
  user: any;
  loginData: any;
  loginResponse: any;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private loader: LoaderService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.login();
      }
    });
  }

  ngOnInit(): void {
    
  }

  login() {
    this.loginResponse = this.auth.login(this.id).subscribe(
      (data) => {
        this.loginData = data;
        this.user = data['data'];
        if (data['data'].token) {
          localStorage.setItem('_user', JSON.stringify(this.user))
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  ngOnDestroy(): void {
    this.loginResponse.unsubscribe();
  }
}

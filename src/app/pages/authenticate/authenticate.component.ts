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
    throw new Error('Method not implemented.');
  }
  login() {
    this.loginResponse = this.auth.login(this.id).subscribe(
      (data) => {
        this.loginData = data;
        if (data['data'].token) {
          let empDtata = {
            token: data['data'].token,
            employeeId: data['data'].id,
            name: `${data['data'].firstName}  ${data['data'].lastName}`,
          };
          localStorage.setItem('empData', JSON.stringify(empDtata));
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

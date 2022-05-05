import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmployeeResponse } from '../model/employee';

@Injectable()
export class AuthService {
  resources = { login: '/employee/login' };
  constructor(private http: HttpClient) {}

  login(employeeId, studioId = '62663262406ac89fb01cdc64') {
    return this.http.post(environment.url + this.resources.login, {
      employeeId,
      studioId,
    });
  }
}

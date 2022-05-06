import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmployeeResponse } from '../model/employee';

@Injectable()
export class EmployeeService {
  resources = { emp: '/employees' };
  constructor(private http: HttpClient) {}

  getEmployee(){
    console.log("api call");
   return  this.http.get<EmployeeResponse>(environment.url+this.resources.emp,{params:{studioId:'62663262406ac89fb01cdc64'}});

  }

}

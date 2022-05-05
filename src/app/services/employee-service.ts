import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmployeeResponse } from '../model/employee';

@Injectable()
export class EmployeeService {
  resources = { category: '/employees' };
  headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Origin, Accept,Authorization,Content-Length, X-Requested-With',
    'Content-Type': 'application/json',
  };
  constructor(private http: HttpClient) {}
  
  getEmployee(){
   return  this.http.get<EmployeeResponse>(environment.url+this.resources.category,{params:{studioId:'62663262406ac89fb01cdc64'},headers:this.headers});
   
  }
 
}

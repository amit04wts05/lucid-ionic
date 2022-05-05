import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmployeeResponse } from '../model/employee';

@Injectable()
export class CartService {
  resources = { category: '/addToCart' };
  constructor(private http: HttpClient) {}
  
  addCart(){
   return  this.http.post(environment.url+this.resources.category,{params:{studioId:'62663262406ac89fb01cdc64'}});
   
  }
 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { EmployeeResponse } from '../model/employee';

@Injectable()
export class CartService {
  resources = { cart: '/addToCart',listcart:'/cart' };
  refreshCart:any;
  constructor(private http: HttpClient) {
    this.refreshCart =new BehaviorSubject("");
  }
 // "raw": "{\n    \"studioId\": \"62663262406ac89fb01cdc64\",\n    \"productId\": \"62664042406ac89fb01cdf7c\",\n    \"qty\": 1\n}",

  addCart(productId,qty,variantyId,studioId='62663262406ac89fb01cdc64'){
   return  this.http.post(environment.url+this.resources.cart,{studioId,productId,qty,variantyId});

  }
  showcart(){
    return  this.http.get<any>(environment.url+this.resources.listcart,{params:{studioId:'62663262406ac89fb01cdc64'}});

  }

}

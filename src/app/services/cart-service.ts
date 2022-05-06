import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { EmployeeResponse } from '../model/employee';

@Injectable()
export class CartService {
  resources = {
    cart: '/addToCart',
    listcart: '/cart',
    clearcart: '/clearCart',
  };
  refreshCart: any;
  constructor(private http: HttpClient) {
    this.refreshCart = new BehaviorSubject('');
  }

  addCart(productId, qty, variantId?, studioId = '62663262406ac89fb01cdc64') {
    return this.http.post(environment.url + this.resources.cart, {
      studioId,
      productId,
      qty,
      variantId,
    });
  }
  showcart() {
    return this.http.get<any>(environment.url + this.resources.listcart, {
      params: { studioId: '62663262406ac89fb01cdc64' },
    });
  }
  clearCart(employeeId, studioId = '62663262406ac89fb01cdc64') {
    return this.http.put(environment.url + this.resources.clearcart, {
      employeeId,
      studioId,
    });
  }
}

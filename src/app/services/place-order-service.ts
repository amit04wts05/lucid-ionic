import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class PlaceOrderService {
  resources = { place: '/placeOrder' };
  constructor(private http: HttpClient) {}

  placeOrder(
    cartId,
    amount,
    method,
    customerId='62664c74406ac89fb01ce2e2',
    studioId = '62663262406ac89fb01cdc64'
  ) {
    return this.http.post(environment.url + this.resources.place, {
      cartId,
      amount,
      method,
      customerId,
      studioId,
    });
  }
}

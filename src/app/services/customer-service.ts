import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CustomerResponse } from '../model/customer';

@Injectable()
export class CustomerService {
  resources = { customer: '/customers' };
  constructor(private http: HttpClient) {}

  addCustomer(
    email,
    phoneNumber,
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    city,
    state,
    zipcode
  ) {
    return this.http.post(environment.url + this.resources.customer, {
      email,
      phoneNumber,
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      state,
      zipcode,
    });
  }

  getCustomer() {
    return this.http.get<CustomerResponse>(
      environment.url + this.resources.customer,
      { params: { studioId: '62663262406ac89fb01cdc64' } }
    );
  }
}

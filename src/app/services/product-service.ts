import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductResponse } from '../model/product';

@Injectable()
export class ProductService {
  resources = { product: '/products' };

  constructor(private http: HttpClient) {}

  getProduct(id: any, type, search, offset, limit) {
    return this.http.get<ProductResponse>(
      environment.url + this.resources.product,
      {
        params: {
          categoryId: id,
          studioId: '62663262406ac89fb01cdc64',
          type: type,
          search: search,
          offset: offset,
          perPage: limit,
        },
      }
    );
  }
}

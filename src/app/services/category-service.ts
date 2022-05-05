import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CategoryResponse } from '../model/category';


@Injectable()
export class CategoryService {
  resources = { category: '/categories' };
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<CategoryResponse>(
      environment.url + this.resources.category,
      { params: { studioId: '62663262406ac89fb01cdc64' } }
    );
  }
}

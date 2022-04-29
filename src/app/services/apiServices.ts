import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {CategoryResponse} from "../model/category";
import { ProductResponse } from "../model/product";

@Injectable()
export class ApiService{
  resources = {category:"/categories",product:"/products"}
  constructor(private http:HttpClient){

  }
  getCategory(){
   return  this.http.get<CategoryResponse>(environment.url+this.resources.category);
  }
  getProduct(id:any){
    return  this.http.get<ProductResponse>(environment.url+this.resources.product,{params:{id:''}});
   }
}

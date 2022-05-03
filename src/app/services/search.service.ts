import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchSubject = new BehaviorSubject(null); 
  constructor() { }
  setsearchkey(name){
    this.searchSubject.next(name);
  }
}

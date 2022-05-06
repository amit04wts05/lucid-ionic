import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private searchService: SearchService, private _router: Router) {}
  searchKey = '';
  empname = '';

  ngOnInit(): void {
    let empData = JSON.parse(localStorage.getItem('empData'));
    if (empData.name) {
      this.empname = empData.name;
    }
  }
  getData(event) {
    if (this.searchKey) {
      this.searchService.setsearchkey(event.target.value || '');
    } else if (event.target.value.length > 1) {
      this.searchKey = event.target.value;
      this.searchService.setsearchkey(event.target.value);
    }
  }
  logout() {
    localStorage.clear();
    this._router.navigate(['']);
  }
}

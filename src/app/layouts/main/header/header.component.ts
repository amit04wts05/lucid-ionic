import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { SearchService } from './../../../services/search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private _router: Router,
    private auth: AuthService,
    private searchService: SearchService) { }

  user: any;
  searchKey = "";
  
  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  getData(event) {
    if (this.searchKey) {
      this.searchService.setsearchkey(event.target.value || "");
    }
    else if (event.target.value.length > 1) {
      this.searchKey = event.target.value;
      this.searchService.setsearchkey(event.target.value)
    }
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['']);
  }

}

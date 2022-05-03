import { Component, OnInit } from '@angular/core';
import { SearchService } from './../../../services/search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private searchService: SearchService) { }
  searchKey = "";
  ngOnInit(): void {
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

}

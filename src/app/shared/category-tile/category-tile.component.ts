import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.scss']
})
export class CategoryTileComponent implements OnInit {

  @Input() categoryData:any; 
  @Output() loadProductEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  loadProduct(event){
    this.loadProductEvent.emit(event);
  }


}

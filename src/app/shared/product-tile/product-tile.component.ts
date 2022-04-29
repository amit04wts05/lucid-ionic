import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

  @Input() product:any; 
  @Output() productPage:EventEmitter<string>= new EventEmitter();  
  constructor() { }

  ngOnInit(): void {
  }

  goToProductDetailPage(){
  this.productPage.emit();
  }

}

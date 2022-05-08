import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent implements OnInit {
  @Input() productData: any;
  @Output() productPage: EventEmitter<string> = new EventEmitter();
  @Output() productPagination: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  productDetail(event) {
    this.productPage.emit(event);
  }
  loadProduct(event) {
    this.productPagination.emit(event);
  }
}

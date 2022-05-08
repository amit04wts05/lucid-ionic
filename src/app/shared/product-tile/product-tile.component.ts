import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader-service';
import { ProductService } from 'src/app/services/product-service';
@Component({
  selector: 'product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent implements OnInit {
  @Input() productData: any;

  @Input() selectedCategory: any;
  @Input() type: any;
  @Input() searchkey: any;
  @Input() page: any;
  @Input() perPage: any;

  productResponse:Subscription;
  @Output() productPage: EventEmitter<string> = new EventEmitter();
  @Output() productPagination: EventEmitter<any> = new EventEmitter();
  constructor(private product:ProductService,private loader:LoaderService) {}

  ngOnInit(): void {}

  productDetail(event) {
    this.productPage.emit(event);
  }
 async loadProduct(event) {
   console.log("load Product");
    this.productPagination.emit(event);

  }

}

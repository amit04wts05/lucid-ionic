import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CategoryResponse } from 'src/app/model/category';
import { ProductResponse } from 'src/app/model/product';
import { ApiService } from 'src/app/services/apiServices';
import { ProductModalComponent } from '../modal/product-modal/product-modal.component';
import { LoaderService } from './../../services/loader-service';
import { SearchService } from './../../services/search.service';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit, OnDestroy {
  catResponse: Subscription;
  categoryData: CategoryResponse;
  productResponse: Subscription;
  productData: Array<ProductResponse>=[];
  selectedCategory: any = '';
  selectbookmark: any = '';
  loading:boolean=true;
  dataReturned: any;
  type='bestSellers';
  searchkey="";
  offset=0;
  limit=2;
  constructor(private router: Router, private http: ApiService,public modalController: ModalController,
    private loader:LoaderService,private searchService:SearchService) {
      this.searchService.searchSubject.subscribe((data)=>{
          this.searchkey=data || "";
          this.loadProduct();
      })
    }

  ngOnInit(): void {
    this.loader.startLoading();
    this.catResponse = this.http.getCategory().subscribe((data) => {
      this.categoryData = data; 
      this.getProduct();
    },
   );
  }


  loadProduct(id?: any) {
    this.loader.startLoading();
    this.selectedCategory = id || "";
    this.getProduct();
  }
  addBookmark(id: any) {
    this.selectbookmark = id;
  }
  getProduct() {
    if (this.productResponse) {
      this.productResponse.unsubscribe();
    }
    this.productResponse = this.http
      ?.getProduct(this.selectedCategory,this.type,this.searchkey,this.offset,this.limit)
      ?.subscribe((data) => {
        this.productData = data;
        this.loader.stopLoading();
      });
  }
  async productDetail(productDetail:any) {
    console.log(productDetail)
    const modal = await this.modalController.create({
      component: ProductModalComponent,
      componentProps: {
        "data": productDetail
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  getProductList(type:any){
    this.type=type;
    this.getProduct();
 }

  ngOnDestroy(): void {
    this.catResponse.unsubscribe();
    this.productResponse.unsubscribe();
  }
}

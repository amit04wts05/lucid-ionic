import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { CategoryResponse } from 'src/app/model/category';
import { ProductResponse } from 'src/app/model/product';
import { ProductService } from '../../services/product-service';
import { ProductModalComponent } from '../modal/product-modal/product-modal.component';
import { LoaderService } from './../../services/loader-service';
import { SearchService } from './../../services/search.service';
import { CartService } from 'src/app/services/cart-service';
import { CategoryService } from 'src/app/services/category-service';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit, OnDestroy {
  catResponse: Subscription;
  categoryData: CategoryResponse;
  productResponse: Subscription;
  productData: any = [];

  selectedCategory: any = '';
  selectbookmark: any = '';
  loading: boolean = true;
  dataReturned: any;
  type = 'bestSellers';
  searchkey = '';
  page = 1;
  perPage = 20;
  totalData = 0;
  totalPage = 0;

  constructor(
    private router: Router,
    private product: ProductService,
    private cat: CategoryService,
    public modalController: ModalController,
    private loader: LoaderService,
    private searchService: SearchService,
    private cartService: CartService
  ) {
    this.searchService.searchSubject.subscribe((data) => {
      if (data) {
        this.searchkey = data || '';
        this.loadProduct();
      }
    });
  }

  ngOnInit(): void {
    this.loader.simpleLoader();
    console.log('getCategory');
    this.catResponse = this.cat.getCategory().subscribe(
      (data) => {
        this.loader.dismissLoader();
        this.categoryData = data;
        this.getProduct();
      },
      (err) => {
        this.loader.dismissLoader();
      }
    );
  }
  productPagination(e) {
    console.log('productPagination pos');
    console.log(e);
    this.getProduct(true, e);
  }
  loadProduct(id?: any) {
    this.loader.simpleLoader();
    this.productData = [];
    this.page = 1;
    this.selectedCategory = id || '';
    this.getProduct(false);
  }

  addBookmark(id: any) {
    this.selectbookmark = id;
  }

  getProduct(loader = true, e?) {
    if (loader) {
      this.loader.simpleLoader();
    }

    if (this.productResponse) {
      this.productResponse.unsubscribe();
    }
    console.log('product');
    this.productResponse = this.product
      ?.getProduct(
        this.selectedCategory,
        this.type,
        this.searchkey,
        this.page,
        this.perPage
      )
      .subscribe(
        (data) => {
          this.loader.dismissLoader();
          // this.productData = data.data;
          this.totalPage = data['totalPage'];
          if (this.page <= data['totalPage']) {
            this.page += 1;
            this.productData = this.productData.concat(data.data);
          }
          if (e) {
            e.target.complete();
          }
        },
        (err) => {
          this.loader.dismissLoader();
          if (e) {
            e.target.complete();
          }
        }
      );
  }

  async productDetail(productDetail: any) {
    console.log(productDetail);
    if (!productDetail.hasOptions) {
      console.log(productDetail._id);

      this.addCart(productDetail._id);
      return false;
    }
    const modal = await this.modalController.create({
      component: ProductModalComponent,
      componentProps: {
        data: productDetail,
      },
      cssClass: 'product-popup',
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  getProductList(type: any) {
    this.type = type;
    this.getProduct();
  }

  addCart(productId) {
    this.loader.simpleLoader();
    this.cartService.addCart(productId, 1).subscribe(
      (data) => {
        this.loader.dismissLoader();
        console.log(data);
        this.cartService.refreshCart.next('');
      },
      (err) => {
        this.loader.dismissLoader();
        console.log(err);
      }
    );
  }
  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    this.loader.simpleLoader();
    setTimeout(() => {
      this.product
        ?.getProduct(
          this.selectedCategory,
          this.type,
          this.searchkey,
          this.page,
          this.perPage
        )
        .subscribe(
          (data) => {
            this.page = data.perPage;
            this.totalData = data.totalData;
            this.totalPage = data.totalPage;
            for (let i = 0; i < data.data.length; i++) {
              this.productData.push(data.data[i]);
            }
          },
          (err) => {
            this.loader.dismissLoader();
            console.log(err);
          }
        );

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.catResponse.unsubscribe();
    this.productResponse.unsubscribe();
  }
}

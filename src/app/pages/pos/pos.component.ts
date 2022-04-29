import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryResponse } from 'src/app/interface/category';
import { ProductResponse } from 'src/app/interface/product';
import { ApiService } from 'src/app/services/apiServices';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit, OnDestroy {
  banners = [{
    title: "We believe in Lucid living",
    description: "Experience the new way of living.",
    image: "./assets/images/hero-banner-girl.png"
  },
  {
    title: "We believe in Lucid living",
    description: "Experience the new way of living.",
    image: "./assets/images/hero-banner-girl.png"
  },

  ]

  products = [{
    title: "Fitted Cap",
    description: "This classic stretch-fitted cap features a three-layer sweatband with patented Stain-Block technology to.",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Women's - Lucid LS Tee",
    description: "The right mix of form and function. The Center logo Long-Sleev Tee is made of moisture-wicking perfor.",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Water Bottle",
    description: "Drinkware made for a journey. Keeps 475 mL/16 fl oz of liquid hot or cold for hours. Vacuum insulated an...",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Women's - Lucid LS Tee",
    description: "The right mix of form and function. The Center Logo Long-Sleeve Tee is made of moisture-wicking perfor...",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Camp Cup",
    description: "Great for heading off the grid or into the backyard. Keeps 355 mL/12 fl oz of liquid hot or cold for hours...",
    price: "$38.00",
    image: "./assets/images/cap.png"
  },
  {
    title: "Fitted Cap",
    description: "This classic stretch-fitted cap features a three-layer sweatband with patented Stain-Block technology to.",
    image: "./assets/images/cap.png"
  },
  ]

  categories = [{
    name: "APPAREL",
    description: "Suites your style anytime and everytime.",
    image: "./assets/images/black-tshirt.png"
  },
  {
    name: "headwear",
    description: "Always be on top with your cool wearables.",
    image: "./assets/images/black-cap.png"
  },
  {
    name: "Merchandise",
    description: "Style your living with our products",
    image: "./assets/images/cap.png"
  },
  ]
  catResponse: Subscription;
  categoryData: CategoryResponse;
  productResponse: Subscription;
  productData: ProductResponse;
  selectedCategory:any = '';
  constructor(private router: Router, private http: ApiService) {

  }

  ngOnInit(): void {
    this.catResponse = this.http.getCategory().subscribe(data => {
        this.categoryData = data;
        console.log(this.catResponse);
    })

    this.getProduct();

  }
  loadProduct(id ){
  this.selectedCategory = id;
  this.getProduct();
  }
  getProduct(){
    if(this.productResponse){
      this.productResponse.unsubscribe();
    }

    this.productResponse = this.http.getProduct(this.selectedCategory).subscribe(data => {

      this.productData = data;
      console.log(this.catResponse);
  })

  }

  gotoProductPage() {
    this.router.navigate(['/productdetail']);
  }
  ngOnDestroy(): void {
    this.catResponse.unsubscribe();
    this.productResponse.unsubscribe();
  }
}

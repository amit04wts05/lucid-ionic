import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product-service';
import { EmployeeService } from './services/employee-service';
import {LoaderComponent} from './shared/loader/loader.component'
import { TokenInterceptorService } from './services/token-interceptor-service';
import { CartService } from './services/cart-service';
import { AuthService } from './services/auth-service';
import { CategoryService } from './services/category-service';
import { PlaceOrderService } from './services/place-order-service';
import { LoaderService } from './services/loader-service';


@NgModule({
  declarations: [AppComponent,LoaderComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [LoaderService,CartService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },EmployeeService,ProductService,AuthService,CategoryService,AuthService,PlaceOrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}

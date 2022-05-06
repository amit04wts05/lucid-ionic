import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from './../../services/employee-service';
import { EmployeeResponse } from 'src/app/model/employee';
import { LoaderService } from 'src/app/services/loader-service';
import { NavController } from '@ionic/angular';

@Component({
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  empResponse: Subscription;
  employeeData: any;
  constructor(

    private emp: EmployeeService,
    private loader: LoaderService,
    private navCtr:NavController
  ) {}
  ngOnInit(): void {
    this.loader.simpleLoader();

    this.empResponse = this.emp.getEmployee().subscribe((data) => {
      console.log(data)
      this.employeeData = data;
      this.loader.dismissLoader();
    },err=>{
      this.loader.dismissLoader();
    });
  }
  authenticationPage(id){
    this.navCtr.navigateForward(["/authentication"],{queryParams:{id:id}});
  }
  ngOnDestroy(): void {
    this.empResponse.unsubscribe();
  }
}

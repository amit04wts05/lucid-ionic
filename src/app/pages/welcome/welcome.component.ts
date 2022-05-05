import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from './../../services/employee-service';
import { EmployeeResponse } from 'src/app/model/employee';
import { LoaderService } from 'src/app/services/loader-service';

@Component({
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  empResponse: Subscription;
  employeeData: EmployeeResponse;
  constructor(
    private router: Router,
    private emp: EmployeeService,
    private loader: LoaderService
  ) {}
  ngOnInit(): void {
    this.loader.startLoading();
    this.empResponse = this.emp.getEmployee().subscribe((data) => {
      this.employeeData = data;
    });
  }

  ngOnDestroy(): void {
    this.empResponse.unsubscribe();
  }
}

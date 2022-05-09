import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { CustomerService } from 'src/app/services/customer-service';
import { LoaderService } from 'src/app/services/loader-service';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss'],
})
export class CustomerModalComponent implements OnInit {
  customerForm: FormGroup;
  constructor(
    private modalController: ModalController,
    private loader: LoaderService,
    private customer: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(20)]],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
    });
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  onSubmit() {
    // alert('zxcxz');
    console.log(this.customerForm.value);
    /*   this.loader.simpleLoader();
    this.customer
      .addCustomer(
        email,
        phoneNumber,
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        city,
        state,
        zipcode
      )
      .subscribe(
        async (data) => {
          console.log(data);

          await this.loader.dismissLoader();
          this.closeModal();
        },
        (err) => {
          this.loader.dismissLoader();
          console.log(err);
        }
      );*/
  }
}

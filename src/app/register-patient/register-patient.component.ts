import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  hide = true;
  registerPatientForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerPatientForm = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      dateOfBirth: [],
      email: [null],
      password: [null],
      mobileNo: [],
      aadhar: [],
      gender: new FormControl(),
      address: this.formBuilder.group({
        address1: [null],
        address2: [null],
        city: [null],
        state: [null],
        pincode: [null]
      })
    });
  }

  callRegister = (data) => {
    console.log(data);
  }
}

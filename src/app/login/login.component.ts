import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private service: CommonService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      password: [null],
      docStatus: [false]
    });
  }

  callLogin = (data) => {
    console.log(data);
    if (data.docStatus === false) {
      //this.service.getLoginForPatient(data).subscribe()
      console.log(data);
    }
    console.log(data);
  }

}

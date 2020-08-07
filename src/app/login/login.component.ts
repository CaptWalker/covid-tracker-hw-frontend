import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      password: [null],
      docStatus: [false]
    });
  }

  callLogin = (data) => {
    console.log(data);
    if (data.docStatus === false){
      if (data.email === 'abcd@gmail.com' && data.password === 'abcd@123'){
        this.router.navigate(['/dashboard']);
        console.log(data);
      }
    }
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private registerService: RegisterService, private route: Router){}

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password)
  }

  register(){
    this.route.navigate(['register'])
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  password2: string|any;
  password: string|any;

  constructor(private registerService: RegisterService){}

  register(form:NgForm){

    const name = form.value.name;
    const surname = form.value.surname;
    const email = form.value.email;
    const email2 = form.value.email2
    this.password = form.value.password;
    this.password2 = form.value.password2;
    this.registerService.register(email, this.password)
  }
}

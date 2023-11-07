import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './services/login.service';
import { Route, Router } from '@angular/router';
import { getAuth, signOut } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MeliFront';


  ngOnInit():void {
    firebase.initializeApp({ 
      //MC
      apiKey: "AIzaSyDo9yGMcrCkpz0oZd3JInY-tajLZvNlRRs",
  authDomain: "meli-1cdec.firebaseapp.com",
    })
  }
  constructor(private loginService: LoginService, private router: Router){
  }
  // ngOnInit():void {
  //   firebase.initializeApp({ 
  //     //MR-DATABASE
  //     apiKey: "AIzaSyDDsxvn-ZeH6U55AxO4J1f2cuqIY6IrXz4",
  //     authDomain: "listado-personas-52777.firebaseapp.com"
  //   })
  // }

  isAutenticado(){
    return this.loginService.isAuthenticated();
  }

  salir(){
    this.loginService.logout();
  }
  
}

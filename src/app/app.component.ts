import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

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
}

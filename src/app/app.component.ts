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
      apiKey: "AIzaSyCs398iURQduu7ysNDC1kMX0Sf8loRXopg",
      authDomain: "personas-1c5dd.firebaseapp.com"
    })
  }
}

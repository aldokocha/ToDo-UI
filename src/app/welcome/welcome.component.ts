import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; // this is how to import a component

// decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { // export makes it "public".

  // in JS
  message = 'Some welcome message'
  // in Java
  // String message = "Some welcome Message";
  // in TS you can add type
  // message : string = 'Some welcome message'

  constructor() { }

  ngOnInit() { // : void means its the return type
    console.log(this.message)
  }

}

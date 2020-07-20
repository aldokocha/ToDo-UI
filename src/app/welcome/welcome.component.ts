import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; // this is how to import a component
import { ActivatedRoute } from '@angular/router';

// decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit { // export makes it "public".

  // in JS
  name = ''
  message = 'Some welcome message'
  // in Java
  // String message = "Some welcome Message";
  // in TS you can add type
  // message : string = 'Some welcome message'

  // Activated Route, need to know which route is active.
  constructor(private route:ActivatedRoute) { 

  }

  ngOnInit() { // : void means its the return type
    console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

}

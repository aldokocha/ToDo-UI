import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ajmk93'
  password = ''
  errorMessage = 'Invalid Credentials!'
  invalidLogin = false;

  // Router
  // Dependecy Injection
  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === "ajmk93" && this.password === "123"){
      this.invalidLogin = false;
      // redirect to welcome page.
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
    //console.log(this.password)
  }

}

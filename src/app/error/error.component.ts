import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Oh Noo! Seems like there has been a mistake :O'

  constructor() { }

  ngOnInit() {
  }

}

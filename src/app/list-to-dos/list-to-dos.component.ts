import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos = [
    { id : 1, description: 'Learn to build a ToDo app.'},
    { id : 2, description: 'Learn Angular.'},
    { id : 3, description: 'Learn FullStack.'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

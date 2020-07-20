import { Component, OnInit } from '@angular/core';

export class ToDo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}

}


@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos = [
    new ToDo(1, 'Learn Angular.', false, new Date()),
    new ToDo(2, 'Learn Java.', false, new Date()),
    new ToDo(3, 'Learn Spring Boot.', false, new Date())
  ]

  constructor() { }

  ngOnInit() {
  }

}

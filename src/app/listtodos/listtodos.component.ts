import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

  todos=[
    {id:1,description:"Learn to Java"},
    {id:2,description:"Learn to C"},
    {id:3,description:"Learn to Python"},
  ]

  // todo={
  //   id:1,
  //   description:"Learn to Java"
  // }

  constructor() { }

  ngOnInit() {
  }

}

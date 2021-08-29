import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public Title:string = "Angular" // 1 ตัวแปร
  public Age:number = 263

  public todos:any

  constructor(public http:HttpClient) {
    var res = this.http.get('https://localhost:5001/api/Todo/GetTodo').toPromise() as Promise<any>
    res.then(value => this.todos = value)
  }

  ngOnInit(): void {
  }

  public onClick(){
    this.Age++;
    console.log('event click worked!')
  }

  public onAddTodo(inpoutTodo:any) {
    console.log(inpoutTodo.value)

    var todo = { id:99, title:inpoutTodo.value }

    var resPost = this.http.post('https://localhost:5001/api/Todo/PostTodo', todo).toPromise() as Promise<any>
    resPost.then(value => this.feedData)
    //addTodo
  }

  public feedData(){
    this.todos = null;
    var res = this.http.get('https://localhost:5001/api/Todo/GetTodo').toPromise() as Promise<any>
    res.then(value => this.todos = value)
  }

}

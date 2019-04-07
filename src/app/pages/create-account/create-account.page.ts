import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  /* name: string;
  username: string;
  mail: string;
  age: Number;
  password: string; */

  constructor(public todoService: TodoService, public route: ActivatedRoute,
     public loadingController: LoadingController, public nav: NavController) {}

  todo: Todo = {
    name: 'wilson',
    username: 'wil',
    phone: 11121,
    age: 17,
    password: 'pass123'
  };

  ngOnInit() {
  }

  create() {
    this.todoService.addTodo(this.todo);
    /* Code for adding into database -> 
    URL : https://console.firebase.google.com/project/crickspotg6dev/database/firestore/data~2Ftodos  */

    console.log("name :"+ this.todo.name);
    console.log("username :"+ this.todo.username);
    console.log("mail :"+ this.todo.phone);
    console.log("Age : "+ this.todo.age);
    console.log("password :" + this.todo.password);
  }

  goBack() {
    console.log('Need Action To Do');
  }
  
}

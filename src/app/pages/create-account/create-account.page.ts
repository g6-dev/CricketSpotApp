import { Component, OnInit } from '@angular/core';
// import { Todo, TodoService } from 'src/app/services/todo.service';
import { Player, DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})

export class CreateAccountPage implements OnInit {

  /* Values from <html> has been taken from here */
  /* name: string;
  username: string;
  mail: string;
  age: Number;
  password: string; */

  constructor(public databaseService: DatabaseService, public route: ActivatedRoute,
     public loadingController: LoadingController, public nav: NavController,
     public router: Router) {}

  /* An object of Todo is created here */
  /* Values has been assigned for testing purpose and passed to <html> via <(ngModel)> */
  player: Player = {
    name: 'wilson',
    username: 'wil',
    phone: 1,
    age: 17,
    password: 'pass123'
  };

  ngOnInit() {
  }

  create() {
    /* Code for adding into database, database url ->
    https://console.firebase.google.com/project/crickspotg6dev/database/firestore/data~2Ftodos  */

    // this.todoService.addTodo(this.todo);
     this.databaseService.addPlayer(this.player);

    /* Find Todo-Service in <services> */

    /* console.log('Todo object => [' + this.todo.name + ', ' + this.todo.username +
    ', ' + this.todo.phone + ', ' + this.todo.age + ', ' +
    this.todo.password + ']'); */

    console.log('Player object => [' + this.player.name + ', ' + this.player.username +
    ', ' + this.player.phone + ', ' + this.player.age + ', ' +
    this.player.password + ']');

    console.log('Todo object is passed to firebase console. link:' +
    'https://console.firebase.google.com/project/crickspotg6dev/database/firestore/data~2Ftodos');
  }

  /* Go back to <home> page from <create-account> page */
  goBack() {
    console.log('Redirected to <home> page');
    this.router.navigate(['/home']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username : string;
  password : string;

  login(){
    console.log("name :"+this.username);
    console.log("password :"+this.password);
  }

  create(){
    console.log("Need Action To Do");
  }

  aboutus(){
    console.log("Need Action To Do");
  }
}

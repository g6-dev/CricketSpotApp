import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  name : string;
  username : string;
  mail : string;
  age : Number;
  password : string;
  cnpassword : string;

  ngOnInit() {
  }

  create(){
    console.log("name :"+this.name);
    console.log("username :"+this.username);
    console.log("mail :"+this.mail);
    console.log("Age : "+this.age);
    console.log("password :"+this.password);
    console.log("conform :"+this.cnpassword);
  }

  goBack(){
    console.log("Need Action To Do");
  }
}

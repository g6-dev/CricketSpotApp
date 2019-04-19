import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;

  /* Login button function comes here. */
  /* TODO: Take all usernames from database and validate the user here */
  /* TODO: Take the password and validate user here*/
  login() {
    console.log('name is ' + this.username + ' & password is ' + this.password);
    console.log('Redirected to <user-account> page...');
  }

  /* New user before logging in, sign up here */
  /* Page redirected to create account page */
  create() {
    console.log('Redirected to <create-account> page...');
  }

  /* Application about page, redirected to about-us page */
  aboutus() {
    console.log('Redirected to <about-us> page...');
  }
}

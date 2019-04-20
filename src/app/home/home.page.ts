import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player, DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;

  constructor(public router: Router) {}

  /* Login button function comes here. */
  /* TODO: Take all usernames from database and validate the user here */
  /* TODO: Take the password and validate user here*/
  login() {
    console.log('name is ' + this.username + ' & password is ' + this.password);
    console.log('Redirected to <user-account> page...');
    this.router.navigate(['/user-account']);
  }

  /* New user before logging in, sign up here */
  /* Page redirected to create account page */
  create() {
    console.log('Redirected to <create-account> page...');
    this.router.navigate(['/create-account']);
  }

  /* Application about page, redirected to about-us page */
  aboutus() {
    console.log('Redirected to <about-us> page...');
    this.router.navigate(['/aboutus']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  signOut() {
    console.log('Redirected to </home> page');
    this.router.navigate(['/home']);
  }

  viewPlayers() {
    console.log('Yet in maintainance');
    // this.router.navigate([]);
  }

  createTeam() {
    console.log('Redirected to </create-team> page');
    this.router.navigate(['/create-team']);
  }

}

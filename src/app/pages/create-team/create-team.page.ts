import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  createYourOwnTeam() {
    console.log('Redirected to </myteam> page');
    this.router.navigate(['/myteam']);
  }

  joinAnotherTeam() {
    console.log('Yet in maintainance');
  }

  goBack() {
    console.log('Redirected to </user-account> page');
    this.router.navigate(['/user-account']);
  }
}

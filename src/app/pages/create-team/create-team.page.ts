import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  create(){
    console.log("Need Action to do");
  }

  goBack(){
    console.log("Back to user home");
  }
}

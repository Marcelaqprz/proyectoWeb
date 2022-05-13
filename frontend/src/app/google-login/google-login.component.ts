import { Component, OnInit } from '@angular/core';
import passport from 'passport';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.sass'],
})
export class GoogleLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /* passport.authenticate('google', {
      scope: ['profile', 'email'],
    }); */
  }
}

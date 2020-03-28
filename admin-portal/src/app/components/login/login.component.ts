import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {EmailValidator, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  set loggedIn(value: boolean) {
    this._loggedIn = value;
  }

  get credential(): { password: string; username: string } {
    return this._credential;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  private _credential = {'username': '', 'password': ''};
  private _loggedIn = false;

  constructor(private loginService: LoginService) {
  }

  onSubmit() {
    this.loginService.sendCredential(this._credential.username, this._credential.password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('xAuthToken', res.json().token);
        this._loggedIn = true;
        // location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this._loggedIn = true;
      },
      error => {
        this._loggedIn = false;
      }
    )
  }

}

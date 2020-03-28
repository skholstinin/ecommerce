import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  get loggedIn(): boolean {
    return this._loggedIn;
  }

  private _loggedIn = false;

  constructor(private loginService: LoginService) {
  }

  toggleDisplay() {
    this._loggedIn = !this._loggedIn;
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

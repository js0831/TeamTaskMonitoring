import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/pages/login/login.service';
import { AppState } from '../../app.state';
import { User } from 'src/app/pages/registration/user.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  user: User;
  subs: Subscription;
  test: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.test = 'test';
    this.subs = this.loginService.selectUser().subscribe( (state: AppState) => {
      this.user = state.user;
    });
  }

  logout() {
    this.router.navigate(['login']);
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

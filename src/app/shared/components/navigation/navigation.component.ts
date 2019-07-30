import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/pages/login/login.service';
import { AppState } from '../../app.state';
import { User } from 'src/app/pages/registration/user.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PageService } from '../page/page.service';
import { Page } from '../page/page.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  user: User;
  currentPage: Page;
  subs: Subscription[] = [];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.subs[0] = this.loginService.selectUser().subscribe( (state: AppState) => {
      this.user = state.user;
    });

    this.subs[1] = this.pageService.selectPage().subscribe( (state: AppState) => {
      this.currentPage = state.page.current;
    });
  }

  logout() {
    this.router.navigate(['login']);
    this.pageService.clearPageData();
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }
}

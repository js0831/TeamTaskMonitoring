import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/pages/login/login.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PageService } from '../page/page.service';

@Component({
  template: `<div>Mock Component</div>`
})
class MockComponent {
}
const routes: Routes = [
  {path: 'login', component: MockComponent},
];

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let dom: Element;
  let loginService: LoginService;
  let pageService: PageService;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        MockComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        {
          provide: Store
        }
      ]
    })
    .compileComponents();

    location = TestBed.get(Location);
    router = TestBed.get(Router);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    loginService = TestBed.get(LoginService);
    pageService = TestBed.get(PageService);

    spyOn(loginService, 'selectUser').and.returnValue(of({
      user: {
        firstname: 'Jener',
        lastname: 'Sigua',
        username: 'siguajener'
      }
    }));

    spyOn(loginService, 'logout');
    spyOn(pageService, 'clearPageData');
    spyOn(pageService, 'selectPage').and.returnValue(of({
      page: {
        history: [],
        current: {
          id: 'task',
          path: '/task'
        }
      }
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the user fullname', () => {
    const el = dom.querySelector('.navigation__name');
    expect(el.innerHTML).toBe('Jener Sigua');
  });

  it('should redirect to login page upon clicking logout button', fakeAsync(() => {
    component.logout();
    tick();
    expect(location.path()).toBe('/login');
  }));

  it('should hide the task link button when the active page is task', () => {
    const el = dom.querySelector('.navigation__link__task');
    expect(el).toBe(null);
  });

  it('should show the team link button when the active page is task', () => {
    const el = dom.querySelector('.navigation__link__team');
    expect(el != null).toBeTruthy();
  });

  it('should redirect to team page upon clicking team link button', () => {
    expect(false).toBeTruthy();
  });





});

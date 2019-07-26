import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public isShow = false;

  constructor(
    private loading: LoadingService
  ) { }

  ngOnInit() {
    this.subscription = this.loading.watch().subscribe( x => {
      switch (x) {
        case 'LOADING_START':
            this.isShow = true;
            break;
        case 'LOADING_END':
            this.isShow = false;
            break;
        default:
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

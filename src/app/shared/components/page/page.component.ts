import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { PageService } from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() id: string;

  constructor(
    private location: Location,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.pageService.pageChanged({
      id: this.id,
      path: this.location.path()
    });
  }

}

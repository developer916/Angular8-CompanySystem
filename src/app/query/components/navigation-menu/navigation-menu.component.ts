import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { QueryMenuService } from 'app/query/services/query-menu.service';
import { QueryMenu } from 'app/query/model/query-menu';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {

  private _queryMenus: QueryMenu[] = [];

  private qmsSub: Subscription = null;


  constructor(private qms: QueryMenuService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.qmsSub = this.qms.queryMenus.subscribe(value => {
      this._queryMenus = value;
    });
  }

  ngOnDestroy(): void {
    this.qmsSub.unsubscribe();
  }

  getQueryMenus() {
    return this._queryMenus;
  }

  routeToQueryPage(path: string) {
    this.router.navigate([path]);
  }
}

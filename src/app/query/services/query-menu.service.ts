import { Injectable } from '@angular/core';
import { DataService } from '../../core/services/data-service.service';
import { BehaviorSubject } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { QueryMenu, QueryMenuItem } from '../model/query-menu';

@Injectable({
  providedIn: 'root'
})
export class QueryMenuService {

  private _queryMenus: BehaviorSubject<QueryMenu[]> = new BehaviorSubject<QueryMenu[]>([]);


  /**
   * Constructor loads query menus
   */
  constructor(private ds: DataService,
              private logger: NGXLogger) {
    this.ds.getQueryMenuData().subscribe(
      queryMenus => {
        const loadedQueryMenus: QueryMenu[] = [];
        queryMenus.forEach(queryMenuData => {
          const menuItems: QueryMenuItem[] = [];
          queryMenuData.items.forEach(queryMenuItemData => {
            const queryMenuItem = new QueryMenuItem(queryMenuItemData.name, queryMenuItemData.path);
            menuItems.push(queryMenuItem);
          });
          const queryMenu = new QueryMenu(queryMenuData.name, menuItems);
          loadedQueryMenus.push(queryMenu);
        });
        this._queryMenus.next(loadedQueryMenus);
      });
  }

  get queryMenus() {
    return this._queryMenus;
  }
}

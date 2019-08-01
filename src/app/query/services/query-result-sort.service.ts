import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class QueryResultSortService {

  /**
   * Return sorted data based on a simple alphabetic/numerical sort
   * 
   * @param data 
   * @param sort 
   */
  sortData(data: any, sort: MatSort) {
    return data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return this.compare(a[sort.active], b[sort.active], isAsc);
    });
  }

  /**
   * Simple comparison function 
   * 
   * @param a 
   * @param b 
   * @param isAsc 
   */
  private compare(a: any, b: any, isAsc: boolean) {
    if (a < b) {
      return isAsc ? -1 : 1;
    } else if (a > b) {
      return isAsc ? 1 : -1
    } else {
      return 0;
    }
  }
}

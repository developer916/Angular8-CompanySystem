import {Component} from '@angular/core';
import {IncidentQueryComponent} from '../incident-query/incident-query.component';


@Component({
  selector: 'app-incident-query-review',
  templateUrl: './incident-query-review.component.html',
  styleUrls: ['../../../query.module.css'] // pulled from the incident-query.css
})
export class IncidentQueryReviewComponent extends IncidentQueryComponent {

  /**
   * @see IncidentQueryComponent#getRoute
   */
  getRoute(): string {
    return '/list/review';
  }

  /**
   * @see IncidentQueryComponent#getQuerySession
   */
  getQuerySession(): string {
    return 'Session.OS.Query.Review';
  }
}

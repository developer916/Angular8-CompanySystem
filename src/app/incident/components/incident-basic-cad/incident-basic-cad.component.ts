import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-incident-basic-cad',
  templateUrl: './incident-basic-cad.component.html',
  styleUrls: ['./incident-basic-cad.component.css']
})
export class IncidentBasicCadComponent implements OnInit, OnDestroy {

  displayedColumns = ['name', 'value'];
  cadDataDatabase: CadDataDatabase | null;
  dataSource: CadDataDataSource | null;

  /**
   * Constructor
   *
   * @param db DataBrokerServiceInterface
   * @param route ActivatedRoute
   */
  constructor(@Inject('DataBrokerService') private db: DataBrokerServiceInterface,
              private route: ActivatedRoute) {
  }

  /**
   * Called when the component is created
   */
  ngOnInit() {
    this.cadDataDatabase = new CadDataDatabase(this.db, this.route);
    this.dataSource = new CadDataDataSource(this.cadDataDatabase);
  }

  /**
   * Called when the component is destroyed
   */
  ngOnDestroy() {
    this.cadDataDatabase.unsubscibeQuery();
  }
}

export class CadDataDatabase {

  /**
   * Subscription to the CAD data
   */
  private dataSub: Subscription;

  /**
   * Observable object that holds CAD data
   * @type {BehaviorSubject<{}>}
   */
  dataChange: BehaviorSubject<{ name: String, value: String }[]> = new BehaviorSubject<{ name: String, value: String }[]>([]);

  /**
   * Constructor. Sets up the subscription on the Observable to CAD data
   *
   * @param db
   * @param route
   */
  constructor(db: DataBrokerServiceInterface, route: ActivatedRoute) {
    const copiedData = this.data.slice();
    const incidentId = route.parent.parent.snapshot.params.id;
    db.getIncidentCadData(incidentId).subscribe(cadData => {
        if (cadData != null) {
          Object.getOwnPropertyNames(cadData['incidentStandard'])
            .filter(prop => prop !== 'cmincidentStandardKey' && prop !== 'idHash' && cadData['incidentStandard'][prop] != null)
            .forEach(key => {
              const capName = key.replace(/\b\w/g, l => l.toUpperCase());
              copiedData.push({name: capName, value: cadData['incidentStandard'][key]});
              this.dataChange.next(copiedData);
            })
        }
      }
    );
  }

  /**
   * Getter for the data in the Incident Query Data Observable
   *
   * @returns {{name: String, value: String}[]}
   */
  get data() {
    return this.dataChange.value;
  }

  /**
   * Unsubscribes from the IncidentQueryData subscription. It's made protected so that the component class can
   * call this method when the component is destroyed
   */
  unsubscibeQuery() {
    if (this.dataSub != null) {
      this.dataSub.unsubscribe();
    }
  }
}

/**
 * Data source to provide what data should be rendered in the table.
 */
export class CadDataDataSource extends DataSource<any> {

  /**
   *
   * @param _cadDataDatabase
   */
  constructor(private _cadDataDatabase: CadDataDatabase) {
    super();
  }

  /**
   *  Connect function called by the table to retrieve one stream containing the data to render.
   */
  connect(): Observable<{ name: String, value: String }[]> {
    return this._cadDataDatabase.dataChange.pipe(
      map(() => {
        return this._cadDataDatabase.data.slice();
      })
    );
  }

  /**
   *
   */
  disconnect() {}
}

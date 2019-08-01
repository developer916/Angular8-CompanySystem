import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentBasicCadComponent } from './incident-basic-cad.component';
import { CoreModule } from '../../../core/core.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBrokerServiceInterface } from '../../../core/model/data-broker-service';
import { Observable, of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

/**
 * Mock DataBrokerService for testing
 */
class MockDataBrokerService implements DataBrokerServiceInterface {
  populateSessionData(id: string,
                      session: string,
                      formControls?: Map<string, FormControl>) {
  }
  getIncidentCadData(incidentNumber: string): Observable<any> {
    return of(null);
  }
}

/**
 * Mock ActivatedRoute for testing
 */
class MockActivatedRoute extends ActivatedRoute {
  private _parent: ActivatedRoute = new MockActivatedRouteParent();
  params = of({id: 123});

  get parent(): ActivatedRoute {
    return this._parent;
  }

  set parent(value: ActivatedRoute) {
    this._parent = value;
  }
}

class MockActivatedRouteParent extends ActivatedRoute {
  private _parent: ActivatedRoute = new MockActivatedRouteGrandParent();
  params = of({id: 1234});

  get parent(): ActivatedRoute {
    return this._parent;
  }

  set parent(value: ActivatedRoute) {
    this._parent = value;
  }
}

class MockActivatedRouteGrandParent extends ActivatedRoute {
  params = of({id: 12345});
}

describe('IncidentBasicCadComponent', () => {
  let component: IncidentBasicCadComponent;
  let fixture: ComponentFixture<IncidentBasicCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        MatCardModule,
        MatTableModule,
        CdkTableModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentBasicCadComponent
      ],
      providers: [
        {
          provide: 'DataBrokerService',
          useClass: MockDataBrokerService
        },
        {
          provide: ActivatedRoute,
          useValue: new MockActivatedRoute()
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentBasicCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentResourcesComponent } from './incident-resources.component';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { API_URL, ApiService } from 'ng2-hallelujah';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentResourcesComponent', () => {
  let component: IncidentResourcesComponent;
  let fixture: ComponentFixture<IncidentResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentResourcesComponent
      ],
      providers: [
        ChildrenOutletContexts,
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

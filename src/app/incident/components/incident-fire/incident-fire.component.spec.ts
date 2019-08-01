import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentFireComponent } from './incident-fire.component';
import { CoreModule } from '../../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ChildrenOutletContexts } from '@angular/router';
import { API_URL, ApiService } from 'ng2-hallelujah';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentFireComponent', () => {
  let component: IncidentFireComponent;
  let fixture: ComponentFixture<IncidentFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentFireComponent
      ],
      providers: [
        ChildrenOutletContexts,
        {
          provide: API_URL,
          useValue: apiURI
        },
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentStructureComponent } from './incident-structure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { ChildrenOutletContexts } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { API_URL, ApiService } from 'ng2-hallelujah';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentStructureComponent', () => {
  let component: IncidentStructureComponent;
  let fixture: ComponentFixture<IncidentStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentStructureComponent
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
    fixture = TestBed.createComponent(IncidentStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

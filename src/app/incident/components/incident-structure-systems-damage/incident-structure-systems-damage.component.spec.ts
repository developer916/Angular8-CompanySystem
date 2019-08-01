import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentStructureSystemsDamageComponent } from './incident-structure-systems-damage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentStructureSystemsDamageComponent', () => {
  let component: IncidentStructureSystemsDamageComponent;
  let fixture: ComponentFixture<IncidentStructureSystemsDamageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentStructureSystemsDamageComponent
      ],
      providers: [
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
    fixture = TestBed.createComponent(IncidentStructureSystemsDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

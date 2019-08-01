import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentWildlandPropertyComponent } from './incident-wildland-property.component';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentWildlandPropertyComponent', () => {
  let component: IncidentWildlandPropertyComponent;
  let fixture: ComponentFixture<IncidentWildlandPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentWildlandPropertyComponent
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
    fixture = TestBed.createComponent(IncidentWildlandPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

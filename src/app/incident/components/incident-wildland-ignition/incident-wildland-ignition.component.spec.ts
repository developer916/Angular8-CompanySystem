import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentWildlandIgnitionComponent } from './incident-wildland-ignition.component';
import { API_URL, ApiService } from 'ng2-hallelujah';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentWildlandIgnitionComponent', () => {
  let component: IncidentWildlandIgnitionComponent;
  let fixture: ComponentFixture<IncidentWildlandIgnitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
      ],
      declarations: [
        IncidentWildlandIgnitionComponent
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
    fixture = TestBed.createComponent(IncidentWildlandIgnitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentWildlandComponent } from './incident-wildland.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { API_URL, ApiService } from 'ng2-hallelujah';


const apiURI = {uri: 'http://localhost/api'};

describe('IncidentWildlandComponent', () => {
  let component: IncidentWildlandComponent;
  let fixture: ComponentFixture<IncidentWildlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IncidentWildlandComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        RouterTestingModule
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
    fixture = TestBed.createComponent(IncidentWildlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

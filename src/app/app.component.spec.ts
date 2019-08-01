import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';


/**
 * Mock Component only used for testing
 */
@Component({
  template: ''
})
class MockComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule,
                 RouterTestingModule.withRoutes([
        { path: 'login', component: MockComponent }
      ]) ],
      declarations: [ MockComponent, AppComponent ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

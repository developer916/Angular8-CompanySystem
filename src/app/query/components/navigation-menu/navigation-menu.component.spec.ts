import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuComponent } from './navigation-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

/**
 * Mock Component only used for testing
 */
@Component({
  template: ''
})
class MockComponent { }

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'basic', component: MockComponent}
        ]),
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule
      ],
      declarations: [
        MockComponent,
        NavigationMenuComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

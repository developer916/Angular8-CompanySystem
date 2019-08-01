import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-within-city',
  templateUrl: './form-within-city.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormWithinCityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

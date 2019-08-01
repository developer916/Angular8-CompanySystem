import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-date-range',
  templateUrl: './form-date-range.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormDateRangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

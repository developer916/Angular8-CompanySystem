import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-fiscal-year',
  templateUrl: './form-fiscal-year.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormFiscalYearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-search-month',
  templateUrl: './form-search-month.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSearchMonthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

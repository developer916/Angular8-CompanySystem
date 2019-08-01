import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-summary-includes',
  templateUrl: './form-summary-includes.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSummaryIncludesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

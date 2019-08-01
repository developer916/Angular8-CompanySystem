import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-report-builder',
  templateUrl: './form-report-builder.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormReportBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

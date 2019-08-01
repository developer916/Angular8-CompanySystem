import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-inspection-quarter',
  templateUrl: './form-inspection-quarter.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormInspectionQuarterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-inspection-compliance',
  templateUrl: './form-inspection-compliance.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormInspectionComplianceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

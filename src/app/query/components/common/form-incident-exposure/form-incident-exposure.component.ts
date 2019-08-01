import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-incident-exposure',
  templateUrl: './form-incident-exposure.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormIncidentExposureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-incident-type',
  templateUrl: './form-incident-type.component.html',
  styleUrls:  ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormIncidentTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

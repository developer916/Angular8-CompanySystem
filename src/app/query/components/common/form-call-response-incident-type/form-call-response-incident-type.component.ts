import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-call-response-incident-type',
  templateUrl: './form-call-response-incident-type.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormCallResponseIncidentTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

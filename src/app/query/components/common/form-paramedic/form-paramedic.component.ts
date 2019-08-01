import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-paramedic',
  templateUrl: './form-paramedic.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormParamedicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

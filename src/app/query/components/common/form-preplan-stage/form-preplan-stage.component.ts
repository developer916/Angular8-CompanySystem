import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-preplan-stage',
  templateUrl: './form-preplan-stage.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormPreplanStageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-new-driver-operator',
  templateUrl: './form-new-driver-operator.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormNewDriverOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

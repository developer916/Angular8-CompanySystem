import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-set-violations',
  templateUrl: './form-set-violations.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSetViolationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

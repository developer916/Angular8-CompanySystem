import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-preplan-number',
  templateUrl: './form-preplan-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormPreplanNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

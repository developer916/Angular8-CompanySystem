import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-date-offset',
  templateUrl: './form-date-offset.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormDateOffsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

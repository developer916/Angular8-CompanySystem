import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-call-hour',
  templateUrl: './form-call-hour.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormCallHourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

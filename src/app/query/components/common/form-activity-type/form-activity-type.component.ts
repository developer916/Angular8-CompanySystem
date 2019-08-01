import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-activity-type',
  templateUrl: './form-activity-type.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormActivityTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

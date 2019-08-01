import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-maintenance-number',
  templateUrl: './form-maintenance-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormMaintenanceNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

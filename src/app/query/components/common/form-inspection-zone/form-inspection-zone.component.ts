import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-inspection-zone',
  templateUrl: './form-inspection-zone.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormInspectionZoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-dispatch-zone',
  templateUrl: './form-dispatch-zone.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormDispatchZoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-fire-mgmt-zone',
  templateUrl: './form-fire-mgmt-zone.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormFireMgmtZoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

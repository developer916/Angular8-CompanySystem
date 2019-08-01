import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-license-plate',
  templateUrl: './form-license-plate.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormLicensePlateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

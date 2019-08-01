import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-license-number',
  templateUrl: './form-license-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormLicenseNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

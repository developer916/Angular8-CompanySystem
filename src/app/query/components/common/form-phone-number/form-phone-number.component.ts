import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-phone-number',
  templateUrl: './form-phone-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormPhoneNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

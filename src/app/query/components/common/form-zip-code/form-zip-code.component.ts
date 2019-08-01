import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-zip-code',
  templateUrl: './form-zip-code.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormZipCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-tax-id',
  templateUrl: './form-tax-id.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormTaxIdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-search-unit-type',
  templateUrl: './form-search-unit-type.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSearchUnitTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

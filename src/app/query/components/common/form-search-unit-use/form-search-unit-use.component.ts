import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-search-unit-use',
  templateUrl: './form-search-unit-use.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSearchUnitUseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

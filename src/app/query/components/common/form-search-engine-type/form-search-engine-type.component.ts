import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-search-engine-type',
  templateUrl: './form-search-engine-type.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSearchEngineTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

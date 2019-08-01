import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-call-response-category',
  templateUrl: './form-call-response-category.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormCallResponseCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

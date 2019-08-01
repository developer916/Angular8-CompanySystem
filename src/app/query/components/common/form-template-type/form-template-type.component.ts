import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-template-type',
  templateUrl: './form-template-type.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormTemplateTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

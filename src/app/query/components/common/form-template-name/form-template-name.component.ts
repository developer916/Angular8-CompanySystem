import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-template-name',
  templateUrl: './form-template-name.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormTemplateNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

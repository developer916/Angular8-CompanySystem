import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-property-use',
  templateUrl: './form-property-use.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormPropertyUseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

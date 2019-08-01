import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-container-type',
  templateUrl: './form-container-type.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormContainerTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

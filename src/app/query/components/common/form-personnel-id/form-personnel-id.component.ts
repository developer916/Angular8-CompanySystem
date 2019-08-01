import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-personnel-id',
  templateUrl: './form-personnel-id.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormPersonnelIdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

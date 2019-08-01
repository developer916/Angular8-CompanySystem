import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-subdivision',
  templateUrl: './form-subdivision.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSubdivisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

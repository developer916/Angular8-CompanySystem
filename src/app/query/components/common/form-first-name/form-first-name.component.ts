import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-first-name',
  templateUrl: './form-first-name.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormFirstNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

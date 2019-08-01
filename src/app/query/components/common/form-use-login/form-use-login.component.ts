import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-use-login',
  templateUrl: './form-use-login.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormUseLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

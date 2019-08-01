import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-administrator',
  templateUrl: './form-administrator.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormAdministratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

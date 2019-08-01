import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-preplan-group',
  templateUrl: './form-preplan-group.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormPreplanGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

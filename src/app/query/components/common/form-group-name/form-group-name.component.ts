import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-group-name',
  templateUrl: './form-group-name.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormGroupNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

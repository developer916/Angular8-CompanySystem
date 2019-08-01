import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-search-gender',
  templateUrl: './form-search-gender.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSearchGenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

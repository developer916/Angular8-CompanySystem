import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-un-number',
  templateUrl: './form-un-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormUnNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-total-square-feet',
  templateUrl: './form-total-square-feet.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormTotalSquareFeetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

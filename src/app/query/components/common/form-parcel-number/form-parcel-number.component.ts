import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-parcel-number',
  templateUrl: './form-parcel-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormParcelNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

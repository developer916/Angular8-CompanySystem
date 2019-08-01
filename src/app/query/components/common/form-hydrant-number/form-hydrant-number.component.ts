import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-hydrant-number',
  templateUrl: './form-hydrant-number.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormHydrantNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

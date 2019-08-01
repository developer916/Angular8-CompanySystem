import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-dot-class',
  templateUrl: './form-dot-class.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormDotClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

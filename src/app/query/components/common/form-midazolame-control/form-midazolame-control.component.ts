import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-midazolame-control',
  templateUrl: './form-midazolame-control.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormMidazolameControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

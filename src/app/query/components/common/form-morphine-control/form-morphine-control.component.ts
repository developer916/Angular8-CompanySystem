import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-morphine-control',
  templateUrl: './form-morphine-control.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormMorphineControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

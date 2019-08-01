import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-engineered-system',
  templateUrl: './form-engineered-system.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormEngineeredSystemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

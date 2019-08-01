import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-call-frequency',
  templateUrl: './form-call-frequency.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormCallFrequencyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-call-frequency-station',
  templateUrl: './form-call-frequency-station.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormCallFrequencyStationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

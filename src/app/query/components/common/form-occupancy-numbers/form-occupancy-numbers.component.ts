import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-occupancy-numbers',
  templateUrl: './form-occupancy-numbers.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormOccupancyNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

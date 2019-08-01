import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-occupancy-class',
  templateUrl: './form-occupancy-class.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormOccupancyClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

export interface Shift {
  value: string;
  displayText: string;
}

@Component({
  selector: 'app-form-shift',
  templateUrl: './form-shift.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormShiftComponent implements OnInit {

  shiftList: Shift[] = [
    {value: '', displayText: 'All'},
    {value: 'A', displayText: 'A'},
    {value: 'B', displayText: 'B'},
    {value: 'C', displayText: 'C'}
  ];

  ngOnInit() {
  }

}

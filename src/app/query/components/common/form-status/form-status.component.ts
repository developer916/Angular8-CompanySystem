import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

export interface Status {
  value: string;
  displayText: string;
}

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormStatusComponent implements OnInit {

  statusList: Status[] = [
    {value: '', displayText: 'All'},
    {value: 'Open', displayText: 'Open'},
    {value: 'Closed', displayText: 'Closed'}
  ]

  ngOnInit(): void {
  }
}

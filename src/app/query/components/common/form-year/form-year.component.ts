import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-form-year',
  templateUrl: './form-year.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormYearComponent implements OnInit {

  private currYear: number;
  year: number;


  constructor() {
  }


  ngOnInit() {
    this.currYear = (new Date()).getFullYear();
    this.year = this.currYear;
  }

  selected(event: MatSelectChange) {
    const selectedData = {
      text: (event.source.selected as MatOption).viewValue,
      value: event.source.value
    }
  }

  getYears() {
    const years = [this.currYear];
    const numYears = 20;
    for (let i = 1; i <= numYears; ++i) {
      years.push(this.currYear - i);
    }
    return years;
  }
}


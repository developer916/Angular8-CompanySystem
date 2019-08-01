import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

export interface ReviewStatus {
  value: string;
  displayText: string;
}

@Component({
  selector: 'app-form-review-status',
  templateUrl: './form-review-status.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormReviewStatusComponent implements OnInit {

  reviewStatusList: ReviewStatus[] = [
    {value: '', displayText: 'All'},
    {value: 'Reviewed', displayText: 'Reviewed'},
    {value: 'Not Reviewed', displayText: 'Not Reviewed'},
    {value: 'AutoClose', displayText: 'AutoClose'}
  ]

  ngOnInit(): void {
  }
}

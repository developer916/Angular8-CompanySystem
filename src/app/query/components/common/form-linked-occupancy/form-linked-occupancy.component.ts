import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-linked-occupancy',
  templateUrl: './form-linked-occupancy.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormLinkedOccupancyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

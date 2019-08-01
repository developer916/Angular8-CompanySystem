import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

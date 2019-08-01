import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-mutual-aid-received',
  templateUrl: './form-mutual-aid-received.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormMutualAidReceivedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

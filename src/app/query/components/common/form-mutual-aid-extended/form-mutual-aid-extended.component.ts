import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-mutual-aid-extended',
  templateUrl: './form-mutual-aid-extended.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormMutualAidExtendedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

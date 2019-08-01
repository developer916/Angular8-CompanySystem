import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-hydrant-group',
  templateUrl: './form-hydrant-group.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormHydrantGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

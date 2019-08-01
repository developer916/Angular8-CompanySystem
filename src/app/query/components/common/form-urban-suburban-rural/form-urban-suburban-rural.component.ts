import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-urban-suburban-rural',
  templateUrl: './form-urban-suburban-rural.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormUrbanSuburbanRuralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

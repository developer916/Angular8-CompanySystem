import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-chemical-begins-with',
  templateUrl: './form-chemical-begins-with.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormChemicalBeginsWithComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';



@Component({
  selector: 'app-form-max-results',
  templateUrl: './form-max-results.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormMaxResultsComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {

  }



}

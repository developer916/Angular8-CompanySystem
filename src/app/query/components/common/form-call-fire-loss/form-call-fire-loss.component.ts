import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-call-fire-loss',
  templateUrl: './form-call-fire-loss.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormCallFireLossComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

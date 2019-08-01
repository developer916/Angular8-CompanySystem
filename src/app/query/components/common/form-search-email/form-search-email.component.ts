import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-search-email',
  templateUrl: './form-search-email.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormSearchEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-form-access-encrypted-data',
  templateUrl: './form-access-encrypted-data.component.html',
  styleUrls: ['../../../query.module.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormAccessEncryptedDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

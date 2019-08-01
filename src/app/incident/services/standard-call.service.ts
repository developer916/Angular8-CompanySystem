import { Injectable } from '@angular/core';
import { StandardCall, StandardCallItem } from '../model/standard-call';
import { DataService } from '../../core/services/data-service.service';
import { BehaviorSubject } from 'rxjs';
import { FormStateService } from '../../core/services/form-state.service';
import { LookupService } from '../../core/services/lookup.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class StandardCallService {

  private standardCallData: BehaviorSubject<StandardCall[]> = new BehaviorSubject<StandardCall[]>([]);


  /**
   * Constructor - loads standard call data from the backend.
   */
  constructor(private ds: DataService,
              private fss: FormStateService,
              private ols: LookupService,
              private logger: NGXLogger) {
    this.ds.getStandardCallData().subscribe(
      response => {
        const loadedCalls: StandardCall[] = [];
        response.forEach(data => {
          const callItems: StandardCallItem[] = [];
          data.callItem.forEach(item => {
            const callItem = new StandardCallItem(item.sessionName, item.clientName, item.value);
            callItems.push(callItem);
          });
          const standardCall = new StandardCall(data.name, data.title, data.type, data.category, callItems);
          loadedCalls.push(standardCall);
        });
        this.standardCallData.next(loadedCalls);
      });
  }

  get standardCalls() {
    return this.standardCallData;
  }

  public handleStandardCallChange(selectedCallValue: string) {
    const selectedCall = this.standardCallData.value.find(call => call.name === selectedCallValue);
    this.logger.debug('Selected Call: ' + JSON.stringify(selectedCall));
    selectedCall.callItems.forEach(callItem => {
      const control = this.fss.getFormControlForSession(callItem.sessionName, callItem.controlName);
      const lookup = this.fss.getControlLookup(callItem.sessionName, callItem.controlName);
      if (lookup != null) {
        control.setValue(this.ols.getOptionForSessionAndCode(lookup, callItem.value));
      } else {
        control.setValue(callItem.value);
      }
    })
  }
}

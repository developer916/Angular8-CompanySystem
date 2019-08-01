import { Injectable } from '@angular/core';
import { DataService } from 'app/core/services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class QueryResultPatchService {

  constructor(private ds: DataService) { }

  /**
   * Submits an ad hoc PATCH to an incident. We're assuming that whoever calls this method knows the
   * correct property names and value types to send in the patch
   * 
   * @param incidentId ID of the incident that we are patching
   * @param patchObject object containing the key/value pairs that we want to patch on the incident object
   */
  patchIncidentValue(incidentId: string, patchObject: {}) {
    return this.ds.patchIncident(incidentId, patchObject);
  }
}

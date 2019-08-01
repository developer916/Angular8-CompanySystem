import { FormControl } from '@angular/forms';
import { LookupService } from '../../core/services/lookup.service';
import { FormStateService } from '../../core/services/form-state.service';
import { Entity } from 'ng2-hallelujah';
import { Incident } from './incident';
import { AosEntity } from 'app/core/model/aos-entity';
import { REST } from '../../core/model/REST';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AgencyOnScene extends Entity implements AosEntity<AgencyOnScene> {

    public static REL_NAME =  "agencyOnScene";
    public static API_PATH_NAME = "agencyOnScene";

    idHash: string;

    @REST.ForeignEntityRef({isOwner: true})
    incident: Incident;

    agencyId: string;
    agencyRepresentative: string;
    activityComment: string;

    public static fromSessionState(session: {
        AgencyOnScene1?: string,
        RepName1?: string,
        ContactInfo1?: string,
        AgencyOnScene2?: string,
        RepName2?: string,
        ContactInfo2?: string,
        AgencyOnScene3?: string,
        RepName3?: string,
        ContactInfo3?: string,
        AgencyOnScene4?: string,
        RepName4?: string,
        ContactInfo4?: string,
        AgencyOnScene5?: string,
        RepName5?: string,
        ContactInfo5?: string,
        AgencyOnScene6?: string,
        RepName6?: string,
        ContactInfo6?: string
    }){
        const agenciesOnScene = [];
        for (var i: number = 0; i < 7; i++) {
          var iStr = String(i+1);
          let agencyId = session['AgencyOnScene'+iStr];
          let agencyRep = session['RepName'+iStr];
          let contactInfo = session['ContactInfo'+iStr];
          if (agencyId && agencyRep) {
            let agency = new AgencyOnScene();
            agency.agencyId = agencyId;
            agency.agencyRepresentative = agencyRep;
            agency.activityComment = contactInfo;
            agenciesOnScene.push(agency);
          }
        }
        return agenciesOnScene;
    }

    public static populateSession(formControls: Map<string, FormControl>, agencyOnScene: AgencyOnScene[], ols: LookupService) {
        if (!agencyOnScene) return;
        for (var i: number = 0; i < 7; i++) {
          if (agencyOnScene.length > i) {
            let agency = agencyOnScene[i];
            if (agency) {
              var iStr = String(i+1);
              FormStateService.initializeFormControlValue(formControls.get('AgencyOnScene'+iStr), 
                                                          ols.getOptionForSessionAndCode('Lookup.OS.AM.AgencyOnscene', agency.agencyId));
              FormStateService.initializeFormControlValue(formControls.get('RepName'+iStr), agency.agencyRepresentative);
              FormStateService.initializeFormControlValue(formControls.get('ContactInfo'+iStr), agency.activityComment);
            }
          }
       }
    }  

    public update(agencyOnScene: AgencyOnScene): Observable<void> {
        if (!(agencyOnScene === this)) {
          agencyOnScene._links = {}
          Object.assign(agencyOnScene._links, this._links);
        }
        return super.update(agencyOnScene).pipe(
          tap(() => {
            this.agencyId = agencyOnScene.agencyId;
            this.agencyRepresentative = agencyOnScene.agencyRepresentative;
            this.activityComment = agencyOnScene.activityComment;
          })
        );
    }
}

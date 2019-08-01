import { Injectable } from '@angular/core';

@Injectable()
export class QueryService {

  /**
   * Holds the query params (value) by session (key)
   */
  private incidentQueryParams: Map<string, Object> = new Map<string, Object>();


  /**
   * Get the saved query params for the given session
   * 
   * @param session Session for which to retrieve params
   */
  public getQueryParams(session: string): any {
    return this.incidentQueryParams.get(session);
  }

  /**
   * Set the query params for the given session
   * 
   * @param session Session to which save params
   * @param value The query params to save
   */
  public setQueryParams(session: string, value: any) {
    this.incidentQueryParams.set(session, value);
  }
}

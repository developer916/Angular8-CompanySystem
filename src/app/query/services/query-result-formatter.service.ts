/**
 * Legacy Record Types from FirstOnScene - these dictate background and font color and weight
 */
export enum ResponseType {
  R = 1,
  Plus,
  S,
  M,
  N
}
//
export class QueryResultFormatterService {

  /**
   * Given a incident row and it's response determine the CSS class to apply. This makes sure all rows in the response are
   * colored correctly
   *
   * @param row
   */
  static getRowClass(row: any) {
    if (row.response === 'No Units') {
      return 'response-type-n';
    } else if (row.response.includes('(R)')) {
      return 'response-type-r';
    }  else if (row.response.includes('(+)')) {
      return 'response-type-plus';
    } else if (row.response.includes('(S)')) {
      return 'response-type-s';
    } else if (row.response.includes('(M)')) {
      return 'response-type-m';
    }
  }

  /**
   * Formats what we show in the 'Response' column of the incident query result list
   *
   * @param responsibleFullReport
   * @param responseType
   */
  static formatResponse(responsibleFullReport: string, responseType: ResponseType) {
    if (responsibleFullReport == null || responsibleFullReport === '' || responseType == null) {
      return '';
    } else if (responsibleFullReport === 'No Units') {
      return responsibleFullReport;
    } else {
      return responsibleFullReport + ' (' + (responseType === ResponseType.Plus ? '+' : ResponseType[responseType]) + ')';
    }
  }

  /**
   * This is a port of the legacy FoS code that determines the unit responsible for the full report
   *
   * @param content
   */
  static getResponsibleFullReport(content: any) {
    const units = content.units;
    if (units != null) {
      if (units.length === 1) {
        return units[0].unit.unitId;
      } else {
        const responsibleUnit = units.find(unit => unit.narrative != null && unit.narrative.responsibleFullReportFlag === true);
        return responsibleUnit == null ? 'Multiple Units' : responsibleUnit.unit.unitId;
      }
    } else {
      return 'No Units';
    }
  }

  /**
   * This is a port of the legacy FoS code that determines response type
   *
   * @param content
   */
  static getResponseType(content: any) {
    const reviewedIndicator = content.reviewerNarrativeText != null;
    const alarms = content.response.alarmsCount as number;
    const status = content.response.status;
    const units = content.units;

    if (status.toUpperCase() === 'OPEN') {
      if (reviewedIndicator) {
        return ResponseType.R;
      }
    }
    if (alarms != null && (alarms >= 2 && alarms <= 6)) {
      return ResponseType.Plus;
    }
    if (units != null) {
      if (units.length === 1 && !reviewedIndicator) {
        return ResponseType.S
      } else if (!reviewedIndicator) {
        return ResponseType.M
      }
    } else if (!reviewedIndicator) {
      return ResponseType.N
    }
    return null;
  }
}

import gql from 'graphql-tag';

export class IncidentGraphQlquery {

  /**
   * Query to retrieve incident data
   */
  static readonly queryIMIncidents = gql`
    query incidents(
    $beginDateTime: String,
    $endDateTime: String ,
    $lastXDays: Int,
    $unitIDs: String,
    $incidentNumber: String,
    $exposureNumber: String,
    $year: Int,
    $personnelId: String,
    $incidentAddress: String,
    $city: String,
    $status: String,
    $shift: String,
    $rowCount: Int,
    $stationId: String,
    $battalion: String,
    $division: String) {
      incidents (
        beginDateTime: $beginDateTime,
        endDateTime: $endDateTime,
        lastXDays: $lastXDays,
        unitIds: $unitIDs,
        incidentNumber: $incidentNumber,
        exposureNumber: $exposureNumber,
        year: $year,
        personnelId: $personnelId,
        incidentAddress: $incidentAddress,
        city: $city,
        status: $status,
        shift: $shift,
        rowCount: $rowCount,
        stationId: $stationId,
        battalion: $battalion,
        division: $division) {
        content {
          idHash
          incidentNumber
          reviewerNarrativeText
          cadSummary {
            cadIncidentType
          }
          response {
            incidentTypeCode
            status
            alarmsCount
            exposureNumber
            alarmDateTime
            streetAddress {
              addressText
            }
            city
          }
          units {
            unit {
              unitId
            }
            narrative{
              responsibleFullReportFlag
            }
          }
        }
        links {
          rel
          href
        }
      }
    }
  `;
}

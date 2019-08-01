import gql from 'graphql-tag';

export class QueryReviewIncidents {

  /**
   * Query to retrieve incident data
   */
  static readonly queryReviewIncidents = gql`
    query reviewIncidents(
    $beginDateTime: String,
    $endDateTime: String ,
    $lastXDays: Int,
    $unitIDs: String,
    $stationId: String,
    $battalion: String,
    $division: String
    $incidentNumber: String,
    $exposureNumber: String,
    $year: Int,
    $incidentTypeCode: String,
    $personnelId: String,
    $reviewStatus: String,
    $rowCount: Int
    ) {
      reviewIncidents (
        beginDateTime: $beginDateTime,
        endDateTime: $endDateTime,
        lastXDays: $lastXDays,
        unitIds: $unitIDs,
        stationId: $stationId,
        battalion: $battalion,
        division: $division
        incidentNumber: $incidentNumber,
        exposureNumber: $exposureNumber,
        year: $year,
        personnelId: $personnelId,
        incidentTypeCode: $incidentTypeCode,
        personnelId: $personnelId,
        reviewStatus: $reviewStatus,
        rowCount: $rowCount
        ) {
        content {
          idHash
          incidentNumber
          closedDateTime
          publicReleaseFlag
          reviewerPersonnelID
          reviewerFirstName
          reviewerMiddleInitial
          reviewerLastName
          reviewerNameSuffix
          reviewerRank
          reviewerAssignmentCode
          reviewerDate
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

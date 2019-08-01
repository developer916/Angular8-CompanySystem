import gql from 'graphql-tag';

export class QueryHazmatUnitOperations {
  /**
   * Query to retrieve incident data
   */
  static readonly queryHazmatUnitOperations = gql`
    query hazmatUnitOperations(
      $beginDateTime: String,
      $endDateTime: String ,
      $lastXDays: Int,
      $incidentNumber: String,
      $exposureNumber: String,
      $year: Int,
      $unitIDs: String,
      $personnelId: String,
      $chemicalName: String,
      $dotClassificationCode: String,
      $chemicalBeginsWith: String,
      $containerTypeCode: String,
      $unNumber: Int,
      $incidentAddress: String,
      $city: String,
      $status: String,
      $rowCount: Int
    ) {
      hazmatUnitOperations (
        beginDateTime: $beginDateTime,
        endDateTime: $endDateTime,
        lastXDays: $lastXDays,
        incidentNumber: $incidentNumber,
        exposureNumber: $exposureNumber,
        year: $year,
        unitIds: $unitIDs,
        personnelId: $personnelId,
        chemicalName: $chemicalName,
        dotClassificationCode: $dotClassificationCode,
        chemicalBeginsWith: $chemicalBeginsWith,
        containerTypeCode: $containerTypeCode,
        unNumber: $unNumber,
        incidentAddress: $incidentAddress,
        city: $city,
        status: $status,
        rowCount: $rowCount
        ) {
        content {
          idHash
          incidentNumber
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
          inputForms {
            idHash
            status
            headerType
            headerTitle
            inputFormHazMatUnitOperation {
              unitId
              reportByPersonnelId
              reportByFirstName
              reportByMiddleInitial
              reportByLastName
              reportByNameSuffix
              reportByRank
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

import gql from 'graphql-tag';

export class QueryPublicIncidents {

  /**
   * Query to retrieve incident data
   */
  static readonly queryPublicIncidents = gql`
    query publicIncidents(
    $beginDateTime: String,
    $endDateTime: String,
    $lastXDays: Int,
    $incidentAddress: String,
    $city: String,
    $zipCode: String,
    $firstName: String,
    $lastName: String,
    $licensePlate: String,
    $licenseNumber: String,
    $incidentNumber: String,
    $exposureNumber: String,
    $year: Int,
    $rowCount: Int
    ) {
      publicIncidents (
        beginDateTime: $beginDateTime,
        endDateTime: $endDateTime,
        lastXDays: $lastXDays,
        incidentAddress: $incidentAddress,
        city: $city,
        zipCode: $zipCode,
        firstName: $firstName,
        lastName: $lastName,
        licensePlate: $licensePlate,
        licenseNumber: $licenseNumber,
        incidentNumber: $incidentNumber,
        exposureNumber: $exposureNumber,
        year: $year,
        rowCount: $rowCount
        ) {
        content {
          idHash
          incidentNumber
          reviewerPersonnelID
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
            state
            zipCode
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

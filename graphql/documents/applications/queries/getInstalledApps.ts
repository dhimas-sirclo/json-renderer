import { gql } from "@apollo/client";

const getInstalledApps = gql`
  query getInstalledApps($filter: InstalledApplicationsFilter!) {
    installedApplications(filter: $filter) {
      id @client
      title @client
      description @client
    }
  }
`;

export default getInstalledApps;

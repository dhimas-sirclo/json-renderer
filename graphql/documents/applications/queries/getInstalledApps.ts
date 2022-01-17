import { gql } from "@apollo/client";

const getInstalledApps = gql`
  query getInstalledApps($filter: InstalledApplicationsFilter) {
    installedApplications(filter: $filter) {
      id
      title
      description
    }
  }
`;

export default getInstalledApps;

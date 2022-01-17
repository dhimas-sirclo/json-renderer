import { gql } from "@apollo/client";

const getAppShortcuts = gql`
  query getAppShortcuts($filter: ApplicationShortcutsFilter!) {
    applicationShortcuts(filter: $filter) {
      id
      title
      description
      actionId
    }
  }
`;

export default getAppShortcuts;

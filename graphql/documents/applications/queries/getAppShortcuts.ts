import { gql } from "@apollo/client";

const getAppShortcuts = gql`
  query getAppShortcuts($filter: ApplicationShortcutsFilter!) {
    applicationShortcuts(filter: $filter) {
      id @client
      title @client
      shortcut @client
      description @client
    }
  }
`;

export default getAppShortcuts;

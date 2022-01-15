import { gql } from "@apollo/client";

const getAppBlocks = gql`
  query getAppBlocks($filter: ApplicationBlocksFilter!) {
    applicationBlocks(filter: $filter) {
      type
      title {
        title
        icon
      }
      action {
        id
        buttons {
          type
          label
          action {
            id
          }
        }
      }
      blocks {
        type
        input {
          type
          name
        }
      }
    }
  }
`;

export default getAppBlocks;

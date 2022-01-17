import { gql } from "@apollo/client";

const executeAction = gql`
  mutation executeAction($input: ExecuteActionInput!) {
    executeAction(input: $input) {
      ... on AppDialog {
        type
        title {
          text
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
          ... on BlockInput {
            type
            input {
              type
              name
              label
              options {
                label
                value
              }
            }
          }
        }
      }
    }
  }
`;

export default executeAction;

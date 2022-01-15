import { gql } from "@apollo/client";

const executeAction = gql`
  mutation executeAction($input: ExecuteActionInput!) {
    executeAction(input: $input) {
      type @client
      title {
        text @client
        icon @client
      }
      action {
        id @client
        buttons {
          type @client
          label @client
          action {
            id @client
          }
        }
      }
      blocks {
        type @client
        input {
          type @client
          name @client
          label @client
          options {
            label @client
            value @client
          }
        }
      }
    }
  }
`;

export default executeAction;

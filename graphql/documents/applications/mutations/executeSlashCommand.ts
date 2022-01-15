import { gql } from "@apollo/client";

const executeSlashCommand = gql`
  mutation executeSlashCommand($input: ExecuteSlashCommandInput!) {
    executeSlashCommand(input: $input) {
      type @client
      title @client
      action {
        id @client
        buttons {
          type @client
          label @client
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

export default executeSlashCommand;

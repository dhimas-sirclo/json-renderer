import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ActionResponse = AppDialog | AppFeedback;

export type AppDialog = {
  action?: Maybe<DialogAction>;
  blocks?: Maybe<Array<Block>>;
  title: DialogTitle;
  type: Scalars['String'];
};

export type AppFeedback = {
  type: Scalars['String'];
};

export type ApplicationShortcut = {
  actionId: Scalars['ID'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ApplicationShortcutsFilter = {
  appId: Scalars['ID'];
  brandIds?: InputMaybe<Array<Scalars['ID']>>;
  channels?: InputMaybe<Array<Scalars['ID']>>;
  roomIds?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  tenantIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type Block = BlockButton | BlockContainer | BlockImage | BlockInput;

export type BlockButton = {
  button: BlockButtonDetail;
  type: Scalars['String'];
};

export type BlockButtonAction = {
  id: Scalars['String'];
};

export type BlockButtonDetail = {
  action?: Maybe<BlockButtonAction>;
  label: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type BlockContainer = {
  container: BlockContainerDetail;
  type: Scalars['String'];
};

export type BlockContainerDetail = {
  blocks: Array<Block>;
  direction?: Maybe<Scalars['String']>;
};

export type BlockImage = {
  image: BlockImageDetail;
  type: Scalars['String'];
};

export type BlockImageDetail = {
  alt?: Maybe<Scalars['String']>;
  src: Scalars['String'];
};

export type BlockInput = {
  input?: Maybe<BlockInputDetail>;
  type: Scalars['String'];
};

export type BlockInputDetail = {
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<BlockInputOption>>;
  type: Scalars['String'];
};

export type BlockInputOption = {
  label: Scalars['String'];
  value: Scalars['String'];
};

export type DialogAction = {
  buttons?: Maybe<Array<Maybe<BlockButtonDetail>>>;
  id?: Maybe<Scalars['ID']>;
};

export type DialogTitle = {
  icon?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ExecuteActionInput = {
  action: Scalars['String'];
  appId: Scalars['ID'];
  brandId: Scalars['ID'];
  channel: Scalars['ID'];
  /** JSON String */
  data?: InputMaybe<Scalars['String']>;
  roomId: Scalars['ID'];
  tenantId: Scalars['ID'];
};

export type InstalledApplication = {
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type InstalledApplicationsFilter = {
  brandIds?: InputMaybe<Array<Scalars['ID']>>;
  channels?: InputMaybe<Array<Scalars['ID']>>;
  roomIds?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Array<Scalars['String']>>;
  tenantIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type Mutation = {
  executeAction?: Maybe<ActionResponse>;
};


export type Mutation_ExecuteActionArgs = {
  input: ExecuteActionInput;
};

export type Query = {
  applicationShortcuts?: Maybe<Array<Maybe<ApplicationShortcut>>>;
  installedApplications?: Maybe<Array<Maybe<InstalledApplication>>>;
};


export type Query_ApplicationShortcutsArgs = {
  filter?: InputMaybe<ApplicationShortcutsFilter>;
};


export type Query_InstalledApplicationsArgs = {
  filter?: InputMaybe<InstalledApplicationsFilter>;
};

export type ExecuteActionMutationVariables = Exact<{
  input: ExecuteActionInput;
}>;


export type ExecuteActionMutation = { executeAction?: { type: string, title: { text?: string | null | undefined, icon?: string | null | undefined }, action?: { id?: string | null | undefined, buttons?: Array<{ type?: string | null | undefined, label: string, action?: { id: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined, blocks?: Array<{ type: string, input?: { type: string, name: string, label?: string | null | undefined, options?: Array<{ label: string, value: string }> | null | undefined } | null | undefined } | {}> | null | undefined } | {} | null | undefined };

export type GetAppShortcutsQueryVariables = Exact<{
  filter: ApplicationShortcutsFilter;
}>;


export type GetAppShortcutsQuery = { applicationShortcuts?: Array<{ id: string, title: string, description: string, actionId: string } | null | undefined> | null | undefined };

export type GetInstalledAppsQueryVariables = Exact<{
  filter?: InputMaybe<InstalledApplicationsFilter>;
}>;


export type GetInstalledAppsQuery = { installedApplications?: Array<{ id: string, title: string, description: string } | null | undefined> | null | undefined };


export const ExecuteActionDocument = gql`
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
export type ExecuteActionMutationFn = Apollo.MutationFunction<ExecuteActionMutation, ExecuteActionMutationVariables>;

/**
 * __useExecuteActionMutation__
 *
 * To run a mutation, you first call `useExecuteActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExecuteActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [executeActionMutation, { data, loading, error }] = useExecuteActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExecuteActionMutation(baseOptions?: Apollo.MutationHookOptions<ExecuteActionMutation, ExecuteActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExecuteActionMutation, ExecuteActionMutationVariables>(ExecuteActionDocument, options);
      }
export type ExecuteActionMutationHookResult = ReturnType<typeof useExecuteActionMutation>;
export type ExecuteActionMutationResult = Apollo.MutationResult<ExecuteActionMutation>;
export type ExecuteActionMutationOptions = Apollo.BaseMutationOptions<ExecuteActionMutation, ExecuteActionMutationVariables>;
export const GetAppShortcutsDocument = gql`
    query getAppShortcuts($filter: ApplicationShortcutsFilter!) {
  applicationShortcuts(filter: $filter) {
    id
    title
    description
    actionId
  }
}
    `;

/**
 * __useGetAppShortcutsQuery__
 *
 * To run a query within a React component, call `useGetAppShortcutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppShortcutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppShortcutsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetAppShortcutsQuery(baseOptions: Apollo.QueryHookOptions<GetAppShortcutsQuery, GetAppShortcutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppShortcutsQuery, GetAppShortcutsQueryVariables>(GetAppShortcutsDocument, options);
      }
export function useGetAppShortcutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppShortcutsQuery, GetAppShortcutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppShortcutsQuery, GetAppShortcutsQueryVariables>(GetAppShortcutsDocument, options);
        }
export type GetAppShortcutsQueryHookResult = ReturnType<typeof useGetAppShortcutsQuery>;
export type GetAppShortcutsLazyQueryHookResult = ReturnType<typeof useGetAppShortcutsLazyQuery>;
export type GetAppShortcutsQueryResult = Apollo.QueryResult<GetAppShortcutsQuery, GetAppShortcutsQueryVariables>;
export const GetInstalledAppsDocument = gql`
    query getInstalledApps($filter: InstalledApplicationsFilter) {
  installedApplications(filter: $filter) {
    id
    title
    description
  }
}
    `;

/**
 * __useGetInstalledAppsQuery__
 *
 * To run a query within a React component, call `useGetInstalledAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstalledAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstalledAppsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetInstalledAppsQuery(baseOptions?: Apollo.QueryHookOptions<GetInstalledAppsQuery, GetInstalledAppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInstalledAppsQuery, GetInstalledAppsQueryVariables>(GetInstalledAppsDocument, options);
      }
export function useGetInstalledAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInstalledAppsQuery, GetInstalledAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInstalledAppsQuery, GetInstalledAppsQueryVariables>(GetInstalledAppsDocument, options);
        }
export type GetInstalledAppsQueryHookResult = ReturnType<typeof useGetInstalledAppsQuery>;
export type GetInstalledAppsLazyQueryHookResult = ReturnType<typeof useGetInstalledAppsLazyQuery>;
export type GetInstalledAppsQueryResult = Apollo.QueryResult<GetInstalledAppsQuery, GetInstalledAppsQueryVariables>;

      export type PossibleTypesResultData = {
  "possibleTypes": {
    "ActionResponse": [
      "AppDialog",
      "AppFeedback"
    ],
    "Block": [
      "BlockButton",
      "BlockContainer",
      "BlockImage",
      "BlockInput"
    ]
  }
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ActionResponse": [
      "AppDialog",
      "AppFeedback"
    ],
    "Block": [
      "BlockButton",
      "BlockContainer",
      "BlockImage",
      "BlockInput"
    ]
  }
};
      export default result;
    
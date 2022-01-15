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

export type ApplicationShortcut = {
  __typename?: 'ApplicationShortcut';
  description: Scalars['String'];
  id: Scalars['ID'];
  shortcut: Scalars['String'];
  title: Scalars['String'];
};

export type ApplicationShortcutsFilter = {
  appId: Scalars['ID'];
  /** ACTIVE, */
  status?: InputMaybe<Array<Scalars['String']>>;
};

export type Block = {
  __typename?: 'Block';
  input?: Maybe<BlockInput>;
  type: Scalars['String'];
};

export type BlockInput = {
  __typename?: 'BlockInput';
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<BlockInputOption>>;
  type: Scalars['String'];
};

export type BlockInputOption = {
  __typename?: 'BlockInputOption';
  label: Scalars['String'];
  value: Scalars['String'];
};

export type ExecuteActionInput = {
  action: Scalars['String'];
  appId: Scalars['ID'];
  brandId: Scalars['ID'];
  /** JSON String */
  data?: InputMaybe<Scalars['String']>;
  roomId: Scalars['ID'];
  tenantId: Scalars['ID'];
};

export type ExecuteShortcutInput = {
  appId: Scalars['ID'];
  brandId: Scalars['ID'];
  /** JSON String */
  data?: InputMaybe<Scalars['String']>;
  roomId: Scalars['ID'];
  shortcut: Scalars['String'];
  tenantId: Scalars['ID'];
};

export type ExecuteSlashCommandInput = {
  appId: Scalars['ID'];
  brandId: Scalars['ID'];
  command: Scalars['String'];
  /** JSON String */
  data?: InputMaybe<Scalars['String']>;
  roomId: Scalars['ID'];
  tenantId: Scalars['ID'];
};

export type InstalledApplication = {
  __typename?: 'InstalledApplication';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type InstalledApplicationsFilter = {
  brandIds?: InputMaybe<Array<Scalars['String']>>;
  communicationChannels?: InputMaybe<Array<Scalars['String']>>;
  /** ACTIVE, */
  status?: InputMaybe<Array<Scalars['String']>>;
  tenantIds?: InputMaybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  executeAction?: Maybe<UntitledResponse>;
  executeShortcut?: Maybe<UntitledResponse>;
  executeSlashCommand?: Maybe<UntitledResponse>;
  test: Test;
};


export type MutationExecuteActionArgs = {
  input: ExecuteActionInput;
};


export type MutationExecuteShortcutArgs = {
  input: ExecuteShortcutInput;
};


export type MutationExecuteSlashCommandArgs = {
  input: ExecuteSlashCommandInput;
};

export type Query = {
  __typename?: 'Query';
  applicationShortcuts?: Maybe<Array<Maybe<ApplicationShortcut>>>;
  installedApplications?: Maybe<Array<Maybe<InstalledApplication>>>;
  test: Test;
};


export type QueryApplicationShortcutsArgs = {
  filter?: InputMaybe<ApplicationShortcutsFilter>;
};


export type QueryInstalledApplicationsArgs = {
  filter?: InputMaybe<InstalledApplicationsFilter>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['ID'];
};

export type UntitledAction = {
  __typename?: 'UntitledAction';
  buttons: Array<UntitledButton>;
  id: Scalars['ID'];
};

export type UntitledButton = {
  __typename?: 'UntitledButton';
  label: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UntitledResponse = {
  __typename?: 'UntitledResponse';
  action?: Maybe<UntitledAction>;
  blocks?: Maybe<Array<Block>>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ExecuteActionMutationVariables = Exact<{
  input: ExecuteActionInput;
}>;


export type ExecuteActionMutation = { __typename?: 'Mutation', executeAction?: { __typename?: 'UntitledResponse', type: string, title?: string | null | undefined, action?: { __typename?: 'UntitledAction', id: string, buttons: Array<{ __typename?: 'UntitledButton', type?: string | null | undefined, label: string }> } | null | undefined, blocks?: Array<{ __typename?: 'Block', type: string, input?: { __typename?: 'BlockInput', type: string, name: string, label?: string | null | undefined, options?: Array<{ __typename?: 'BlockInputOption', label: string, value: string }> | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type ExecuteShortcutMutationVariables = Exact<{
  input: ExecuteShortcutInput;
}>;


export type ExecuteShortcutMutation = { __typename?: 'Mutation', executeShortcut?: { __typename?: 'UntitledResponse', type: string, title?: string | null | undefined, action?: { __typename?: 'UntitledAction', id: string, buttons: Array<{ __typename?: 'UntitledButton', type?: string | null | undefined, label: string }> } | null | undefined, blocks?: Array<{ __typename?: 'Block', type: string, input?: { __typename?: 'BlockInput', type: string, name: string, label?: string | null | undefined, options?: Array<{ __typename?: 'BlockInputOption', label: string, value: string }> | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type ExecuteSlashCommandMutationVariables = Exact<{
  input: ExecuteSlashCommandInput;
}>;


export type ExecuteSlashCommandMutation = { __typename?: 'Mutation', executeSlashCommand?: { __typename?: 'UntitledResponse', type: string, title?: string | null | undefined, action?: { __typename?: 'UntitledAction', id: string, buttons: Array<{ __typename?: 'UntitledButton', type?: string | null | undefined, label: string }> } | null | undefined, blocks?: Array<{ __typename?: 'Block', type: string, input?: { __typename?: 'BlockInput', type: string, name: string, label?: string | null | undefined, options?: Array<{ __typename?: 'BlockInputOption', label: string, value: string }> | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type GetAppShortcutsQueryVariables = Exact<{
  filter: ApplicationShortcutsFilter;
}>;


export type GetAppShortcutsQuery = { __typename?: 'Query', applicationShortcuts?: Array<{ __typename?: 'ApplicationShortcut', id: string, title: string, shortcut: string, description: string } | null | undefined> | null | undefined };

export type GetInstalledAppsQueryVariables = Exact<{
  filter: InstalledApplicationsFilter;
}>;


export type GetInstalledAppsQuery = { __typename?: 'Query', installedApplications?: Array<{ __typename?: 'InstalledApplication', id: string, title: string, description: string } | null | undefined> | null | undefined };


export const ExecuteActionDocument = gql`
    mutation executeAction($input: ExecuteActionInput!) {
  executeAction(input: $input) {
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
export const ExecuteShortcutDocument = gql`
    mutation executeShortcut($input: ExecuteShortcutInput!) {
  executeShortcut(input: $input) {
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
export type ExecuteShortcutMutationFn = Apollo.MutationFunction<ExecuteShortcutMutation, ExecuteShortcutMutationVariables>;

/**
 * __useExecuteShortcutMutation__
 *
 * To run a mutation, you first call `useExecuteShortcutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExecuteShortcutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [executeShortcutMutation, { data, loading, error }] = useExecuteShortcutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExecuteShortcutMutation(baseOptions?: Apollo.MutationHookOptions<ExecuteShortcutMutation, ExecuteShortcutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExecuteShortcutMutation, ExecuteShortcutMutationVariables>(ExecuteShortcutDocument, options);
      }
export type ExecuteShortcutMutationHookResult = ReturnType<typeof useExecuteShortcutMutation>;
export type ExecuteShortcutMutationResult = Apollo.MutationResult<ExecuteShortcutMutation>;
export type ExecuteShortcutMutationOptions = Apollo.BaseMutationOptions<ExecuteShortcutMutation, ExecuteShortcutMutationVariables>;
export const ExecuteSlashCommandDocument = gql`
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
export type ExecuteSlashCommandMutationFn = Apollo.MutationFunction<ExecuteSlashCommandMutation, ExecuteSlashCommandMutationVariables>;

/**
 * __useExecuteSlashCommandMutation__
 *
 * To run a mutation, you first call `useExecuteSlashCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExecuteSlashCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [executeSlashCommandMutation, { data, loading, error }] = useExecuteSlashCommandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExecuteSlashCommandMutation(baseOptions?: Apollo.MutationHookOptions<ExecuteSlashCommandMutation, ExecuteSlashCommandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExecuteSlashCommandMutation, ExecuteSlashCommandMutationVariables>(ExecuteSlashCommandDocument, options);
      }
export type ExecuteSlashCommandMutationHookResult = ReturnType<typeof useExecuteSlashCommandMutation>;
export type ExecuteSlashCommandMutationResult = Apollo.MutationResult<ExecuteSlashCommandMutation>;
export type ExecuteSlashCommandMutationOptions = Apollo.BaseMutationOptions<ExecuteSlashCommandMutation, ExecuteSlashCommandMutationVariables>;
export const GetAppShortcutsDocument = gql`
    query getAppShortcuts($filter: ApplicationShortcutsFilter!) {
  applicationShortcuts(filter: $filter) {
    id @client
    title @client
    shortcut @client
    description @client
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
    query getInstalledApps($filter: InstalledApplicationsFilter!) {
  installedApplications(filter: $filter) {
    id @client
    title @client
    description @client
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
export function useGetInstalledAppsQuery(baseOptions: Apollo.QueryHookOptions<GetInstalledAppsQuery, GetInstalledAppsQueryVariables>) {
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
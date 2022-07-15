import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

/** create employee input */
export type CreateEmployeeInput = {
  /** birthday of the employee */
  birthday: Scalars['Date'];
  /** city of the employee */
  city?: InputMaybe<Scalars['String']>;
  /** department of the employee */
  department: Scalars['String'];
  /** firstname of the employee */
  firstname: Scalars['String'];
  /** lastname of the employee */
  lastname: Scalars['String'];
  /** startDate of the employee */
  startDate: Scalars['Date'];
  /** state of the employee */
  state: Scalars['String'];
  /** street of the employee */
  street?: InputMaybe<Scalars['String']>;
  /** zipCode of the employee */
  zipCode?: InputMaybe<Scalars['Int']>;
};

/** A employee */
export type Employee = {
  __typename?: 'Employee';
  /** birthday of the employee */
  birthday: Scalars['Date'];
  /** city of the employee */
  city?: Maybe<Scalars['String']>;
  /** department of the employee */
  department: Scalars['String'];
  /** firstname of the employee */
  firstname: Scalars['String'];
  /** id of the employee */
  id: Scalars['ID'];
  /** lastname of the employee */
  lastname: Scalars['String'];
  /** startDate of the employee */
  startDate: Scalars['Date'];
  /** state of the employee */
  state: Scalars['String'];
  /** street of the employee */
  street?: Maybe<Scalars['String']>;
  /** zipCode of the employee */
  zipCode?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee?: Maybe<Employee>;
};


export type MutationCreateEmployeeArgs = {
  input: CreateEmployeeInput;
};

export type Query = {
  __typename?: 'Query';
  getAllEmployee?: Maybe<Array<Maybe<Employee>>>;
};

export type EmployeeFragment = { __typename?: 'Employee', id: string, firstname: string, lastname: string, birthday: any, startDate: any, street?: string | null, city?: string | null, state: string, zipCode?: number | null, department: string };

export type CreateEmployeeMutationVariables = Exact<{
  input: CreateEmployeeInput;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee?: { __typename?: 'Employee', id: string, firstname: string, lastname: string, birthday: any, startDate: any, street?: string | null, city?: string | null, state: string, zipCode?: number | null, department: string } | null };

export type GetAllEmployeeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEmployeeQuery = { __typename?: 'Query', getAllEmployee?: Array<{ __typename?: 'Employee', id: string, firstname: string, lastname: string, birthday: any, startDate: any, street?: string | null, city?: string | null, state: string, zipCode?: number | null, department: string } | null> | null };

export const EmployeeFragmentDoc = gql`
    fragment Employee on Employee {
  id
  firstname
  lastname
  birthday
  startDate
  street
  city
  state
  zipCode
  department
}
    `;
export const CreateEmployeeDocument = gql`
    mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
    ...Employee
  }
}
    ${EmployeeFragmentDoc}`;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<CreateEmployeeMutation, CreateEmployeeMutationVariables>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmployeeMutation, CreateEmployeeMutationVariables>(CreateEmployeeDocument, options);
      }
export type CreateEmployeeMutationHookResult = ReturnType<typeof useCreateEmployeeMutation>;
export type CreateEmployeeMutationResult = Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const GetAllEmployeeDocument = gql`
    query GetAllEmployee {
  getAllEmployee {
    ...Employee
  }
}
    ${EmployeeFragmentDoc}`;

/**
 * __useGetAllEmployeeQuery__
 *
 * To run a query within a React component, call `useGetAllEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEmployeeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEmployeeQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEmployeeQuery, GetAllEmployeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEmployeeQuery, GetAllEmployeeQueryVariables>(GetAllEmployeeDocument, options);
      }
export function useGetAllEmployeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEmployeeQuery, GetAllEmployeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEmployeeQuery, GetAllEmployeeQueryVariables>(GetAllEmployeeDocument, options);
        }
export type GetAllEmployeeQueryHookResult = ReturnType<typeof useGetAllEmployeeQuery>;
export type GetAllEmployeeLazyQueryHookResult = ReturnType<typeof useGetAllEmployeeLazyQuery>;
export type GetAllEmployeeQueryResult = Apollo.QueryResult<GetAllEmployeeQuery, GetAllEmployeeQueryVariables>;
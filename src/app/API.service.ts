/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateMyTestModelInput = {
  title?: string | null;
};

export type UpdateMyTestModelInput = {
  id: string;
  title?: string | null;
};

export type DeleteMyTestModelInput = {
  id: string;
};

export type TableMyTestModelFilterInput = {
  id?: TableIDFilterInput | null;
  title?: TableStringFilterInput | null;
};

export type TableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateMyTestModelMutation = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

export type UpdateMyTestModelMutation = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

export type DeleteMyTestModelMutation = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

export type GetMyTestModelQuery = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

export type ListMyTestModelsQuery = {
  __typename: "MyTestModelConnection";
  items: Array<{
    __typename: "MyTestModel";
    id: string;
    title: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateMyTestModelSubscription = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

export type OnUpdateMyTestModelSubscription = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

export type OnDeleteMyTestModelSubscription = {
  __typename: "MyTestModel";
  id: string;
  title: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateMyTestModel(
    input: CreateMyTestModelInput
  ): Promise<CreateMyTestModelMutation> {
    const statement = `mutation CreateMyTestModel($input: CreateMyTestModelInput!) {
        createMyTestModel(input: $input) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMyTestModelMutation>response.data.createMyTestModel;
  }
  async UpdateMyTestModel(
    input: UpdateMyTestModelInput
  ): Promise<UpdateMyTestModelMutation> {
    const statement = `mutation UpdateMyTestModel($input: UpdateMyTestModelInput!) {
        updateMyTestModel(input: $input) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMyTestModelMutation>response.data.updateMyTestModel;
  }
  async DeleteMyTestModel(
    input: DeleteMyTestModelInput
  ): Promise<DeleteMyTestModelMutation> {
    const statement = `mutation DeleteMyTestModel($input: DeleteMyTestModelInput!) {
        deleteMyTestModel(input: $input) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMyTestModelMutation>response.data.deleteMyTestModel;
  }
  async GetMyTestModel(id: string): Promise<GetMyTestModelQuery> {
    const statement = `query GetMyTestModel($id: ID!) {
        getMyTestModel(id: $id) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMyTestModelQuery>response.data.getMyTestModel;
  }
  async ListMyTestModels(
    filter?: TableMyTestModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMyTestModelsQuery> {
    const statement = `query ListMyTestModels($filter: TableMyTestModelFilterInput, $limit: Int, $nextToken: String) {
        listMyTestModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMyTestModelsQuery>response.data.listMyTestModels;
  }
  OnCreateMyTestModelListener: Observable<
    OnCreateMyTestModelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMyTestModel($id: ID, $title: String) {
        onCreateMyTestModel(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`
    )
  ) as Observable<OnCreateMyTestModelSubscription>;

  OnUpdateMyTestModelListener: Observable<
    OnUpdateMyTestModelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMyTestModel($id: ID, $title: String) {
        onUpdateMyTestModel(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`
    )
  ) as Observable<OnUpdateMyTestModelSubscription>;

  OnDeleteMyTestModelListener: Observable<
    OnDeleteMyTestModelSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMyTestModel($id: ID, $title: String) {
        onDeleteMyTestModel(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`
    )
  ) as Observable<OnDeleteMyTestModelSubscription>;
}

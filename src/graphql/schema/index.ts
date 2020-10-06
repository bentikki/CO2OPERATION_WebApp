import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
};



export type Car = {
  __typename?: 'Car';
  averageCo2: Scalars['Int'];
  id: Scalars['ID'];
  model?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type CarbonHistroy = {
  __typename?: 'CarbonHistroy';
  day?: Maybe<Scalars['Date']>;
  totalFootPrint?: Maybe<Scalars['Decimal']>;
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  carbonHistories?: Maybe<Array<Maybe<CarbonHistroy>>>;
  carbonHistoriesByUserId: CarbonHistroy;
  /** Query for getting car by car id */
  carById: Car;
  /** Query for getting all cars. */
  cars: Array<Car>;
  carsByUserId?: Maybe<Array<Maybe<Car>>>;
  transportMethodById?: Maybe<TransportMethods>;
  transportMethods?: Maybe<Array<Maybe<TransportMethods>>>;
  tripById: Trip;
  trips?: Maybe<Array<Maybe<Trip>>>;
  tripsByUserId: Trip;
  userById?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryCarbonHistoriesByUserIdArgs = {
  userId: Scalars['Int'];
};


export type QueryCarByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCarsByUserIdArgs = {
  userId: Scalars['Int'];
};


export type QueryTransportMethodByIdArgs = {
  id: Scalars['Int'];
};


export type QueryTripByIdArgs = {
  id: Scalars['Int'];
};


export type QueryTripsByUserIdArgs = {
  id: Scalars['Int'];
};


export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};

export type TransportMethods = {
  __typename?: 'TransportMethods';
  averageCo2?: Maybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Trip = {
  __typename?: 'Trip';
  distance?: Maybe<Scalars['Decimal']>;
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  startTime?: Maybe<Scalars['DateTime']>;
  totalCo2?: Maybe<Scalars['Decimal']>;
  transportMethod?: Maybe<TransportMethods>;
  transportMethodId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  carbonHistroy?: Maybe<Array<Maybe<CarbonHistroy>>>;
  cars?: Maybe<Array<Maybe<Car>>>;
  id: Scalars['ID'];
  totalFootPrint?: Maybe<Scalars['Decimal']>;
  trips?: Maybe<Array<Maybe<Trip>>>;
};




export type GetUserTripsQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetUserTripsQuery = (
  { __typename?: 'Query' }
  & { userById?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { cars?: Maybe<Array<Maybe<(
      { __typename?: 'Car' }
      & Pick<Car, 'id' | 'model'>
    )>>>, trips?: Maybe<Array<Maybe<(
      { __typename?: 'Trip' }
      & Pick<Trip, 'id' | 'transportMethodId' | 'totalCo2' | 'distance' | 'startTime' | 'endTime'>
    )>>> }
  )> }
);

export const GetUserTripsDocument = gql`
    query GetUserTrips($userId: Int!) {
  userById(id: $userId) {
    id
    cars {
      id
      model
    }
    trips {
      id
      transportMethodId
      totalCo2
      distance
      startTime
      endTime
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserTripsGQL extends Apollo.Query<GetUserTripsQuery, GetUserTripsQueryVariables> {
    document = GetUserTripsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
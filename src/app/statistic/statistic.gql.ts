import gql from 'graphql-tag'


export const StatisticFragment = gql`
    fragment Statistic on User {
        id
        totalFootPrint
    }
`;

export const StatisticQuery = gql`
    query GetStatisticByUserId($id: Int!){
        userById(id: $id){
            id
            ...Statistic
        }
    }
    ${StatisticFragment}
`;

export const AllCars = gql`
    query AllCars{
        cars {
            id
            userId
            model
            averageCo2
        }
    }
`;
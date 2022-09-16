import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query Query(
    $first: Int
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          ratingAverage
          reviewCount
        }
      }
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`

export const GET_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const GET_SINGLE_REPOSITORY = gql`
  query Query($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      ownerAvatarUrl
      fullName
      description
      language
      stargazersCount
      forksCount
      ratingAverage
      reviewCount
      url
      reviews(first: $first, after: $after) {
        totalCount

        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

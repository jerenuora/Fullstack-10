import { gql } from '@apollo/client'

export const SING_IN = gql`

mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }

`

export const SING_UP = gql`

mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    username
  }
}
`


export const REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}`
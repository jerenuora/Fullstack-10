import { gql } from '@apollo/client'

export const SING_IN = gql`

mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }

`

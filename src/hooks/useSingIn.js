import { useMutation } from '@apollo/client'
import { SING_IN } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'

const useSignIn = () => {
  const apolloClient = useApolloClient()

  const authStorage = useAuthStorage()

  const [mutate, result] = useMutation(SING_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    })
    if (data) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore()
    }
    return { data }
  }

  return [signIn, result]
}

export default useSignIn

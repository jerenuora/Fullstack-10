import { useMutation } from '@apollo/client'
import { SING_UP } from '../graphql/mutations'

const useSignUp = () => {

  const [mutate, result] = useMutation(SING_UP, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    })
    return { data }
  }

  return [signUp, result]
}

export default useSignUp

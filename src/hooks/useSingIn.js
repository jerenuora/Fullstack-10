import { useMutation } from '@apollo/client'
import { SING_IN } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(SING_IN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const signIn = async ({ username, password }) => {
    const token = await mutate({variables:{
      credentials: {
        username,
        password,
      }},
    })
    return token 
  }

  return [signIn, result]
}

export default useSignIn

import { useMutation } from '@apollo/client'
import { DELETE } from '../graphql/mutations'

const useDelete = () => {

  const [mutate, result] = useMutation(DELETE, {
  })

  const doDelete = async ( deleteReviewId ) => {
    await mutate({
      variables: {
        deleteReviewId
      },
    })
  }

  return [doDelete, result]
}

export default useDelete

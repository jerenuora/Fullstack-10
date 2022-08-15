import { useMutation } from '@apollo/client'
import { REVIEW } from '../graphql/mutations'

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    },
  })

  const review = async ({ rating, text, ownerName, repositoryName }) => {
    const { data } = await mutate({
      variables: {
        review: {
          rating,
          text,
          ownerName,
          repositoryName,
        },
      },
    })
    return { data }
  }

  return [review, result]
}

export default useReview

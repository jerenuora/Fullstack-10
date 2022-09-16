import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_SINGLE_REPOSITORY } from '../graphql/queries'

const useSingleUserInfo = ({ id, first, after }) => {
  const [repository, setRepository] = useState()
  const { data, loading, fetchMore, ...result } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id, first, after },
  })
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
        first,
      },
    })
  }

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useSingleUserInfo

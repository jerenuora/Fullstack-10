import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ first, orderBy, orderDirection, searchKeyword }) => {
  const [repositories, setRepositories] = useState()

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      first,
      orderBy,
      orderDirection,
      searchKeyword,
    },
  })
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first,
        orderBy,
        orderDirection,
        searchKeyword,
      },
    })
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepositories

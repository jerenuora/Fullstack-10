import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const [repositories, setRepositories] = useState()

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
  })
  const fetchRepositories = async () => {
    if (!loading) {
      setRepositories(data.repositories)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [loading])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories

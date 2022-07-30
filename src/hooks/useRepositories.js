import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',

  });

  const fetchRepositories = async () => {
    if (!loading) {
    setRepositories(data.repositories)
    }
    // const response = await fetch('http://192.168.100.13:5000/api/repositories')
    // const json = await response.json()

    // setLoading(false)
      
  }

  useEffect(() => {
    fetchRepositories();
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories  }
}

export default useRepositories

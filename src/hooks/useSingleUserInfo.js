import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_SINGLE_USER } from '../graphql/queries'

const useSingleUserInfo = ({ id }) => {
  const [repository, setRepository] = useState()
  const { data,  loading } = useQuery(GET_SINGLE_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  })
  const fetchRepository = async () => {
      setRepository(data.repository)
    
  }
  console.log(loading)

  useEffect(() => {
    fetchRepository()
  }, [loading])


  return { repository, loading, refetch: fetchRepository }
}

export default useSingleUserInfo

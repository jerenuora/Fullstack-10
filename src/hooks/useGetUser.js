import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_USER } from '../graphql/queries'

const useUser = () => {
  const [user, setUser] = useState()
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })

  const fetchUser = async () => {
    if (!loading) {
      setUser(data)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [loading])

  return { user, loading, refetch: fetchUser }
}

export default useUser

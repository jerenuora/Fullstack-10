import { View, StyleSheet, ScrollView } from 'react-native'

import { useQuery } from '@apollo/client'
import { GET_USER } from '../../graphql/queries'
import { ReviewListContainer } from '../ReviewList'
const ReviewListUser = () => {
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables:{includeReviews: true}
  })
  if (loading) {
    return null
  }


  return (
    <View>
      <ReviewListContainer repository={data.me}  />
    </View>
  )
}
export default ReviewListUser
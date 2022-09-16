import { useParams } from 'react-router-native'
import { FlatList, View, StyleSheet } from 'react-native'
import useSingleUserInfo from '../../hooks/useSingleRepository'
import ReviewItem from './Reviewitem'
import RepositoryItem from '../RepositoryList/RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const ReviewListHeader = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} single={true} />
      <ItemSeparator />
    </View>
  )
}


const ReviewListContainer = ({ repository, onEndReach }) => {
  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => (
        <ReviewListHeader repository={repository} />
      )}
    />
  )
}

const ReviewList = () => {
  const { id } = useParams()
  const { repository, loading, fetchMore } = useSingleUserInfo({
    id: id,
    first: 8,
  })

  const onEndReach = () => {
    fetchMore()
  }

  if (loading) {
    return null
  } else {
    return (
      <ReviewListContainer
        repository={repository}
        onEndReach={onEndReach}
      />
    )
  }
}
export default ReviewList

import { useQuery } from '@apollo/client'
import { GET_SINGLE_USER } from '../../graphql/queries'
import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import { FlatList, View, StyleSheet } from 'react-native'
import Text from '../Text'
import { format, compareAsc } from 'date-fns'
import useSingleUserInfo from '../../hooks/useSingleUserInfo'

const ItemSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    paddingRight: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ratingContainer: {
    padding: 10,
    flexDirection: 'column',
  },
  rating: {
    borderWidth: 2,
    borderColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    padding: 5,
    flexShrink: 1,
    marginBottom: 5,
    alignSelf: 'center',
  },
})

const RepositoryItemSinglePage = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} single={true} />
      <ItemSeparator />
    </View>
  )
}

const ReviewItem = ({ review }) => {
  const time = format(new Date(review.createdAt), 'dd.MM.yyyy')

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <Text fontSize="subheading" style={{ color: 'blue' }}>
            {review.rating}
          </Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text
          fontSize="subheading"
          fontWeight="bold"
          style={{ marginBottom: 5 }}
        >
          {review.user.username}
        </Text>
        <Text color="textSecondary" style={{ marginBottom: 5 }}>
          {time}
        </Text>
        <Text style={{ marginBottom: 5 }}>{review.text}</Text>
      </View>
    </View>
  )
}

const SingleRepositoryContainer = ({ repository, onEndReach }) => {
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
        <RepositoryItemSinglePage repository={repository} />
      )}
    />
  )
}

const SingleRepository = () => {
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
      <SingleRepositoryContainer
        repository={repository}
        onEndReach={onEndReach}
      />
    )
  }
}
export default SingleRepository

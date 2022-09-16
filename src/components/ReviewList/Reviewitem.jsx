import { View, StyleSheet } from 'react-native'
import Text from '../Text'
import { format, compareAsc } from 'date-fns'


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

export default ReviewItem
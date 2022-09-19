import { View, StyleSheet, Pressable } from 'react-native'
import Text from '../Text'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  ratingAndTextContainer: {
    flexDirection: 'row',
    padding: 5,
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
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',

    padding: 5,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  buttonView: {
    flexGrow: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    margin: 5
  },
  buttonDelete: {
    margin: 5,

    flexGrow: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'red',
  },
})

const ReviewItem = ({ review, buttons }) => {
  const time = format(new Date(review.createdAt), 'dd.MM.yyyy')

  const Buttons = () => {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonView} onPress={() => {}}>
          <Text fontSize="subheading" color="appBarText">
            View repository
          </Text>
        </Pressable>
        <Pressable style={styles.buttonDelete} onPress={() => {}}>
          <Text fontSize="subheading" color="appBarText">
            Delete review
          </Text>
        </Pressable>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.ratingAndTextContainer}>
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
      {buttons ? <Buttons /> : null}
    </View>
  )
}

export default ReviewItem

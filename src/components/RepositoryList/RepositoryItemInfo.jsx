import { View, StyleSheet } from 'react-native'
import Text from '../Text'

const infoStyles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  singleInfoItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const Info = ({ item }) => {
  const stars = roundCount(item.stargazersCount)
  const forks = roundCount(item.forksCount)
  const ratings = roundCount(item.ratingAverage)
  const reviews = roundCount(item.reviewCount)

  return (
    <View testID="repositoryItemInfo"  style={infoStyles.infoContainer}>
      <View style={infoStyles.singleInfoItemContainer}>
        <Text fontWeight="bold">{stars}</Text>
        <Text>Stars</Text>
      </View>
      <View style={infoStyles.singleInfoItemContainer}>
        <Text fontWeight="bold">{forks}</Text>
        <Text>Forks</Text>
      </View>
      <View style={infoStyles.singleInfoItemContainer}>
        <Text fontWeight="bold">{ratings}</Text>
        <Text>Rating</Text>
      </View>
      <View style={infoStyles.singleInfoItemContainer}>
        <Text fontWeight="bold">{reviews}</Text>
        <Text>Reviews</Text>
      </View>
    </View>
  )
}

const roundCount = (number) => {
  const roundedNumber =
    number >= 1000 ? (Math.round(number * 100) / 100000).toFixed(1) : number
  const zeroStrippedNumber =
    roundedNumber % 1 !== 0
      ? String(roundedNumber)
      : String(roundedNumber).slice(0, -2)
  const numberWithK = zeroStrippedNumber.concat('K')
  return number < 1000 ? number : numberWithK
}

export default Info

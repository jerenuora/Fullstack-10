import { View } from 'react-native'
import Text from './Text'

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text fontSize="subheading" fontWeight="bold">
        Full name: {item.fullName}
      </Text>
      <Text>Description: {item.description}</Text>
      <Text>Lang: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount} </Text>
    </View>
  )
}

export default RepositoryItem

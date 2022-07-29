import { View, StyleSheet, Image } from 'react-native'
import Text from './Text'

const headerStyles = StyleSheet.create({
  headerContainer: {
    paddingRight: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 90,
  },
  headerTextContainer: {
    flexDirection: 'column',
    padding: 5,
    flexShrink: 1,
    marginBottom: 5,
  },
  languageContainer: {
    backgroundColor: 'blue',
    borderRadius: 3,
    padding: 4,
    alignSelf: 'flex-start',
  },
})

const Header = ({ item }) => {
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.imageContainer}>
        <Image
          style={headerStyles.image}
          source={{ uri: item.ownerAvatarUrl }}
        />
      </View>
      <View style={headerStyles.headerTextContainer}>
        <Text
          fontSize="subheading"
          fontWeight="bold"
          style={{ marginBottom: 5 }}
        >
          {item.fullName}
        </Text>
        <Text color="textSecondary" style={{ marginBottom: 5 }}>
          {item.description}
        </Text>
        <View style={headerStyles.languageContainer}>
          <Text style={{ color: 'white' }}>{item.language}</Text>
        </View>
      </View>
    </View>
  )
}

export default Header

import { View, StyleSheet, Pressable, Linking } from 'react-native'
import Text from '../Text'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    padding: 10,
    alignSelf: 'center',
  },

  button: {
    flexGrow: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
})

const UrlButton = ({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          Linking.openURL(item.url)
          console.log('pressed github button')
        }}
      >
        <Text
          fontSize={'subheading'}
          fontWeight={'bold'}
          style={{ color: 'white' }}
        >
          Open In GitHub
        </Text>
      </Pressable>
    </View>
  )
}
export default UrlButton

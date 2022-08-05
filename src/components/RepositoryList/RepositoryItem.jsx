import { View, StyleSheet, Text, Pressable } from 'react-native'
import Header from './RepositoryItemHeader'
import Info from './RepositoryItemInfo'
import UrlButton from './UrlButton'
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'column',
    flexGrow: 1,
  },
})

const RepositoryItem = ({ item, single }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <Header item={item} />
      <Info item={item} />
      {single ? <UrlButton item={item} /> : null}
    </View>
  )
}

export default RepositoryItem

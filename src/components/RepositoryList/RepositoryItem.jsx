import { View, StyleSheet, Image } from 'react-native'
import Header from './RepositoryItemHeader'
import Info from './RepositoryItemInfo'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'column',
    flexGrow: 1,
  },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Header item={item} />
      <Info item={item} />
    </View>
  )
}

export default RepositoryItem

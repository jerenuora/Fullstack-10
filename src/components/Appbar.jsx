import { View, StyleSheet } from 'react-native'

import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  // ...
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      {<AppBarTab tabName={'Repositories'} address={'/'} />}
      {<AppBarTab tabName={'Sing in'} address={'/signin'} />}
    </View>
  )
}

export default AppBar

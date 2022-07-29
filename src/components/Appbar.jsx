import { View, StyleSheet, ScrollView } from 'react-native'

import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    padding: 12,    
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal  >
        {<AppBarTab tabName={'Repositories '} address={'/'} />}
        {<AppBarTab tabName={'Sing in '} address={'/signin'} />}
      </ScrollView>
    </View>
  )
}

export default AppBar

import { View, StyleSheet, ScrollView } from 'react-native'

import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import useUser from '../../hooks/useGetUser'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    padding: 12,
  },
})

const AppBar = () => {
  const { me, loading } = useUser()
  let tabToShow = <AppBarTab tabName={'Sing in '} address={'/signin'} />
  if (!loading) {
    tabToShow = !me ? (
      <AppBarTab tabName={'Sing in '} address={'/signin'} />
    ) : (
      <AppBarTab tabName={'Sing Out '} address={'/signout'} />
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {<AppBarTab tabName={'Repositories '} address={'/'} />}
        {tabToShow}
      </ScrollView>
    </View>
  )
}

export default AppBar

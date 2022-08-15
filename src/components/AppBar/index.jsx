import { View, StyleSheet, ScrollView } from 'react-native'
import { useQuery } from '@apollo/client'

import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import { GET_USER } from '../../graphql/queries'
import { useEffect } from 'react'

import useAuthStorage from '../../hooks/useAuthStorage'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    padding: 12,
  },
})

const AppBar = () => {
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })

  let loggedInStatusTab = <AppBarTab tabName={'Sing in '} address={'/signin'} />
  if (!loading) {
    loggedInStatusTab = !data.me ? (
      loggedInStatusTab
    ) : (
      <AppBarTab tabName={'Sing Out '} address={'/signout'} />
    )
  }

  let reviewTab = null
  if (!loading) {
    reviewTab = !data.me ? (
      reviewTab
    ) : (
      <AppBarTab tabName={'Review '} address={'/review'} />
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {<AppBarTab tabName={'Repositories '} address={'/'} />}
        {loggedInStatusTab}
        {reviewTab}
      </ScrollView>
    </View>
  )
}

export default AppBar

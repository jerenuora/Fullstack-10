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

  let tabToShow = <AppBarTab tabName={'Sing in '} address={'/signin'} />
  if (!loading) {
    tabToShow = !data.me ? (
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

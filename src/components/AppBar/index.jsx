import { View, StyleSheet, ScrollView } from 'react-native'
import { useQuery } from '@apollo/client'

import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import { GET_USER } from '../../graphql/queries'

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

  let signInOrOutTab = <AppBarTab tabName={'Sing in '} address={'/signin'} />
  
  if (!loading) {
    signInOrOutTab = !data.me ? (
      signInOrOutTab
    ) : (
      <AppBarTab tabName={'Sing Out '} address={'/signout'} />
    )
  }

  let reviewOrSignUpTab = <AppBarTab tabName={'Sing Up '} address={'/signup'} />

  if (!loading) {
    reviewOrSignUpTab = !data.me ? (
      reviewOrSignUpTab
    ) : (
      <AppBarTab tabName={'Review '} address={'/review'} />
    )
  }

  let viewReviewsTab = (
    <AppBarTab tabName={'My reviews '} address={'/reviewuser'} />
  )

  if (!loading) {
    viewReviewsTab = !data.me ? null : viewReviewsTab
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {<AppBarTab tabName={'Repositories '} address={'/'} />}
        {signInOrOutTab}
        {reviewOrSignUpTab}
        {viewReviewsTab}
      </ScrollView>
    </View>
  )
}

export default AppBar

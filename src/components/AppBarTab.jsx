import { Pressable } from 'react-native'
import { Link } from 'react-router-native'

import Text from './Text'

const AppBarTab = ({ tabName, address }) => {
  return (
    <Pressable onPress={() => {}}>
      <Link to={address}>
        <Text color="appBarText" fontWeight="bold" fontSize="subheading" >
          {tabName}
        </Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab

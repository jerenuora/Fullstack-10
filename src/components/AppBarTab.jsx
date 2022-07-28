import { Pressable } from 'react-native'

import Text from './Text'

const AppBarTab = ({ tabName }) => {
    return (
      <Pressable onPress={()=> {}}>
        <Text color='appBarText' fontWeight='bold' fontSize='subheading'>{tabName}</Text>
      </Pressable>
    )
  }

  export default AppBarTab
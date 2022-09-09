import { useState } from 'react'
import { FlatList, View, StyleSheet, Pressable } from 'react-native'

import { Button, Menu, Provider, Searchbar } from 'react-native-paper'
import theme from '../../theme'


const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    searchSortBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundColor,
        flex: 1,
      }
  })
  
const HeaderComponent = ({ order, setOrder }) => {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  const onPressHandlerOrder = (orderUpdate) => {
    closeMenu()
    const newOrder = {
      ...order,
      orderBy: orderUpdate.orderBy,
      orderDirection: orderUpdate.orderDirection,
    }
    setOrder(newOrder)
  }

  const onPressHandler = (searchKeywordUpdate) => {
    const newOrder = {
      ...order,
      searchKeyword: searchKeywordUpdate,
    }
    setOrder(newOrder)
  }

  return (
    <Provider>
      <View
        style={styles.searchSortBar}
      >
        <Searchbar
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
          placeholder="Search"
          onChangeText={onPressHandler}
          value={order.searchKeyword}
        />

        <Menu
          style={{
            alignSelf: 'center',
          }}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              contentStyle={{ flexDirection: 'row-reverse' }}
              icon="sort"
              onPress={openMenu}
            >
              Sort items
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              onPressHandlerOrder({
                orderBy: 'CREATED_AT',
                orderDirection: 'DESC',
              })
            }}
            title="Latest"
          />
          <Menu.Item
            onPress={() => {
              onPressHandlerOrder({
                orderBy: 'RATING_AVERAGE',
                orderDirection: 'DESC',
              })
            }}
            title="Highest rated"
          />
          <Menu.Item
            onPress={() => {
              onPressHandlerOrder({
                orderBy: 'RATING_AVERAGE',
                orderDirection: 'ASC',
              })
            }}
            title="Lowest rated"
          />
        </Menu>
      </View>
    </Provider>
  )
}
export default HeaderComponent

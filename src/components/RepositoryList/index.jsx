import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../hooks/useRepositories.js'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
// import {Picker} from '@react-native-picker/picker';
import { Button, Menu, Provider, Searchbar } from 'react-native-paper'
import theme from '../../theme'
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ headerComponent, repositories }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const PressableArea = ({ item }) => {
    const id = item.id
    return (
      <Pressable onPress={() => navigate(`/${id}`)}>
        <RepositoryItem item={item} single={false} />
      </Pressable>
    )
  }
  return (
    <FlatList
      ListHeaderComponent={headerComponent}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableArea}
      keyExtractor={(item) => item.id}
      stickyHeaderIndices={[0]}
    />
  )
}
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
      searchKeyword: searchKeywordUpdate

    }
    setOrder(newOrder)
  }

  return (
    <Provider>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundColor,
          flex: 1,
        }}
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

const RepositoryList = () => {
  const [order, setOrder] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    searchKeyword: '',
  })


  const { repositories } = useRepositories(order)

  return (
    <RepositoryListContainer
      headerComponent={HeaderComponent({
        order,
        setOrder,
      })}
      repositories={repositories}
    />
  )
}

export default RepositoryList

import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../hooks/useRepositories.js'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
// import {Picker} from '@react-native-picker/picker';
import { Button, Menu, Provider } from 'react-native-paper'
import theme from '../../theme'
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ picker, repositories }) => {
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
      ListHeaderComponent={picker}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableArea}
      keyExtractor={(item) => item.id}
      stickyHeaderIndices={[0]}
    />
  )
}
const Picker = (setOrder) => {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)
  const onPressHandler = (order) => {
    closeMenu()
    setOrder(order)
  }
  return (
    <Provider>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: theme.colors.backgroundColor,
          flex: 1 
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              contentStyle={{ flexDirection: 'row-reverse' }}
              icon="sort"
              onPress={openMenu}
            >
              Sort repositories
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              onPressHandler({
                orderBy: 'CREATED_AT',
                orderDirection: 'DESC',
              })
            }}
            title="Latest"
          />
          <Menu.Item
            onPress={() => {
              onPressHandler({
                orderBy: 'RATING_AVERAGE',
                orderDirection: 'DESC',
              })
            }}
            title="Highest rated"
          />
          <Menu.Item
            onPress={() => {
              onPressHandler({
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
  })
  const { repositories } = useRepositories(order)

  return (
    <RepositoryListContainer
      picker={Picker(setOrder)}
      repositories={repositories}
    />
  )
}

export default RepositoryList

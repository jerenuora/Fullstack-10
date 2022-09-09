import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../hooks/useRepositories.js'
import HeaderComponent from './HeaderComponent'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
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

const RepositoryList = () => {
  const [order, setOrder] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    searchKeyword: '',
  })
  const [debouncedSearchKeyword] = useDebounce(order.searchKeyword, 500)

  const { repositories } = useRepositories({
    ...order,
    searchKeyword: debouncedSearchKeyword,
  })

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

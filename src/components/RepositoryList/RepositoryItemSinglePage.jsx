import { useQuery } from '@apollo/client'
import { GET_SINGLE_USER } from '../../graphql/queries'
import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'

const RepositoryItemSinglePage = () => {
  const { id } = useParams()
  const { data, loading } = useQuery(GET_SINGLE_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  })

  if (loading) {
    return null
  } else {
    const item = data.repository
    return <RepositoryItem item={item} single={true} />
  }
}

export default RepositoryItemSinglePage

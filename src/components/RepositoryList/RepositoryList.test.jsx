import { render, within } from '@testing-library/react-native'
import { RepositoryListContainer } from '.'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }
      const { getAllByTestId, debug } = render(<RepositoryListContainer repositories={repositories} />)

      const repositoryItems = getAllByTestId('repositoryItem')
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems
      const firstRepositoryItemHeader = within(firstRepositoryItem).getByTestId('repositoryItemHeader')
      const firstRepositoryItemInfo = within(firstRepositoryItem).getByTestId('repositoryItemInfo')

      expect(firstRepositoryItemHeader).toHaveTextContent('jaredpalmer/formik')
      expect(firstRepositoryItemHeader).toHaveTextContent('Build forms in React, without the tears')
      expect(firstRepositoryItemHeader).toHaveTextContent('TypeScript')

      expect(firstRepositoryItemInfo).toHaveTextContent('21.9K')
      expect(firstRepositoryItemInfo).toHaveTextContent('1.6K')
      expect(firstRepositoryItemInfo).toHaveTextContent('88')
      expect(firstRepositoryItemInfo).toHaveTextContent('3')

      const secondRepositoryItemHeader = within(secondRepositoryItem).getByTestId('repositoryItemHeader')
      const secondRepositoryItemInfo = within(secondRepositoryItem).getByTestId('repositoryItemInfo')

      expect(secondRepositoryItemHeader).toHaveTextContent('Flexible promise-based React data loader')
      expect(secondRepositoryItemHeader).toHaveTextContent('async-library/react-async')
      expect(secondRepositoryItemHeader).toHaveTextContent('JavaScript')

      expect(secondRepositoryItemInfo).toHaveTextContent('69')
      expect(secondRepositoryItemInfo).toHaveTextContent('1.8K')
      expect(secondRepositoryItemInfo).toHaveTextContent('72')
      expect(secondRepositoryItemInfo).toHaveTextContent('3')
    })
  })
})

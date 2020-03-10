import algoliasearch from 'algoliasearch/lite'
import React from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import { Container } from './styles'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

export default function Search() {
  return (
    <Container>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        {/* <SearchBox
          autoFocus
          translations={{ placeholder: 'Procurar no blog...' }}
        /> */}
        {/* <Stats
          translations={{
            stats(nbHits, _) {
              return `${nbHits} resultados encontrados.`
            },
          }}
        /> */}
        {/* <Hits hitComponent={Hit} /> */}
      </InstantSearch>
    </Container>

    // <Container>
    //   <input placeholder="Search on blog..." />
    // </Container>
  )
}

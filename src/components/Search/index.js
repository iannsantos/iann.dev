import algoliasearch from 'algoliasearch/lite'
import React from 'react'
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import Hit from './Hit'
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
        <SearchBox
          onChange={changeDisplayHits}
          translations={{ placeholder: 'Procurar no blog...' }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Container>
  )
}

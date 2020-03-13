import algoliasearch from 'algoliasearch/lite'
import React from 'react'
import FA from 'react-fontawesome'
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import Hit from './Hit'
import { Container } from './styles'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

export default function Search({ displayHits = false }) {
  function changeDisplayHits(e) {
    console.log(e)
    displayHits = true
  }

  return (
    <Container>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox
          reset={<FA name="close" color="#fff" />}
          onChange={changeDisplayHits}
          translations={{ placeholder: 'Procurar no blog...' }}
        />
        {/* <Stats
          translations={{
            stats(nbHits, _) {
              return `${nbHits} resultados encontrados.`
            },
          }}
        /> */}
        {displayHits && <Hits hitComponent={Hit} />}
      </InstantSearch>
    </Container>

    // <Container>
    //   <input placeholder="Search on blog..." />
    // </Container>
  )
}

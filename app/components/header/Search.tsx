import { DocSearch } from '@docsearch/react'

const translations = {
  button: {
    buttonText: 'Czego szukasz?',
    buttonAriaLabel: 'Czego szukasz?.',
  },
  modal: {
    searchBox: {
      resetButtonTitle: 'Wyczyść zapytanie',
      resetButtonAriaLabel: 'Wyczyść zapytanie',
      cancelButtonText: 'Anuluj',
      cancelButtonAriaLabel: 'Anuluj',
    },
    startScreen: {
      recentSearchesTitle: 'Ostatnie',
      noRecentSearchesText: 'Brak ostatnich wyszukiwań',
      saveRecentSearchButtonTitle: 'Zapisz to wyszukiwanie',
      removeRecentSearchButtonTitle: 'Usuń to wyszukiwanie z historii',
      favoriteSearchesTitle: 'Ulubione',
      removeFavoriteSearchButtonTitle: 'Usuń to wyszukiwanie z ulubionych',
    },
    errorScreen: {
      titleText: 'Nie można pobrać wyników',
      helpText: 'Możesz sprawdzić swoje połączenie z siecią.',
    },
    footer: {
      selectText: 'aby wybrać',
      selectKeyAriaLabel: 'Klawisz Enter',
      navigateText: 'do nawigacji',
      navigateUpKeyAriaLabel: 'Strzałka w górę',
      navigateDownKeyAriaLabel: 'Strzałka w dół',
      closeText: 'aby zamknąć',
      closeKeyAriaLabel: 'Klawisz Escape',
      searchByText: '',
    },
    noResultsScreen: {
      noResultsText: 'Brak wyników dla',
      suggestedQueryText: 'Spróbuj wyszukać',
      reportMissingResultsText:
        'Uważasz, że to zapytanie powinno zwrócić wyniki?',
      reportMissingResultsLinkText: 'Daj nam znać.',
    },
  },
}

export function Search() {
  return (
    <DocSearch
      appId="WJ306HP6G5"
      apiKey="19a0b9d838891ae0dbc39f84ca5b3714"
      indexName="SUBJECT_NAME"
      translations={translations}
      placeholder={'Czego szukasz?'}
      getMissingResultsUrl={({}) => {
        return `https://algoacademy.pl/kontakt`
      }}
      resultsFooterComponent={({ state }) => {
        return <h1>{state.context.nbHits} znajdziono!</h1>
      }}
    />
  )
}

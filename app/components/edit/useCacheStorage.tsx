import { useCallback, useEffect, useState } from 'react'

var throttle = require('lodash.throttle')

const MAX_CACHED_VALUES: number = 10

function countDollarSigns(str: string): number {
  const matches = str.match(/\$/g)

  return matches ? matches.length : 0
}

function getStringBeforeFirstDollar(str: string): string {
  const index = str.indexOf('$')

  return index !== -1 ? str.substring(0, index) : str
}

function storeContentInLocalStorage(key: string, content: string): void {
  localStorage.setItem(key, content)
}

function removeContentFromLocalStorage(key: string): void {
  localStorage.removeItem(key)
}

const handleCacheCleaning = (): void => {
  const storedKeys: string = localStorage.getItem('stored') || ''

  if (countDollarSigns(storedKeys) >= MAX_CACHED_VALUES) {
    const oldestKey = getStringBeforeFirstDollar(storedKeys) || ''
    const updatedStoredKeys = storedKeys.replace(oldestKey + '$', '')
    storeContentInLocalStorage('stored', updatedStoredKeys)
    removeContentFromLocalStorage(oldestKey)
  }
}

const useCacheStorage = ({
  filePath,
  repo,
  originalContent,
  storedContent,
}: {
  filePath: string
  repo: string
  originalContent: string
  storedContent: string
}) => {
  const [cachedContent, setCachedContent] = useState<string | undefined>()
  useEffect(() => {
    console.log('fire')
    handleCacheCleaning()
    setCachedContent(localStorage.getItem(`${filePath}_${repo}`))
    console.log(localStorage.getItem(`${filePath}_${repo}`))
  }, [])

  const debounceCacheUpdate = useCallback(
    throttle(
      (contentUpdate: string) => {
        const cacheKey: string = `${filePath}_${repo}`

        const storedKeys: string = localStorage.getItem('stored') || ''
        const updatedStoredKeys =
          storedKeys.replace(cacheKey + '$', '') + cacheKey + '$'

        localStorage.setItem('stored', updatedStoredKeys)
        storeContentInLocalStorage(cacheKey, contentUpdate)
      },
      1000,
      { leading: false }
    ),
    []
  )

  useEffect(() => {
    if (storedContent !== '') debounceCacheUpdate(storedContent)
  }, [storedContent, filePath, repo])

  return cachedContent
}

export default useCacheStorage

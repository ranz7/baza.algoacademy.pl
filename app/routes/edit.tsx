import Header from '~/components/header/Header'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import * as React from 'react'
import { useRef, useState } from 'react'
import { FiSkipBack, FiSkipForward } from 'react-icons/fi'
import EditPrevious from '~/components/edit/EditPrev'
import EditNext from '~/components/edit/EditNext'
import { fetchRepoFile } from '~/utils/documents.server'

export const loader = async (context: LoaderFunctionArgs) => {
  // parse the search params for `?q=`
  const url = new URL(context.request.url)

  const repo = url.searchParams.get('repo')
  const filePath = url.searchParams.get('filePath') + '.md'
  const fetched = await fetchRepoFile(repo, filePath)

  return json(
    {
      filePath,
      content: fetched?.text,
      repo: repo,
    },
    {
      headers: {
        'Cache-Control': 's-maxage=1, stale-while-revalidate=300',
      },
    }
  )
}

const Edit = () => {
  const { content, filePath, repo } = useLoaderData<typeof loader>()
  const [storedContent, setContent] = useState(content)
  const timeoutRef = useRef(null)
  const [isNext, setIsNext] = useState(true)
  const [borderColor, setBorderColor] = useState('border-gray-300')

  const handleChange = (event) => {
    setContent(event.target.value)
    setBorderColor('border-blue-600')
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setBorderColor('border-gray-300')
    }, 1000)
  }

  return (
    <div className="max-w-screen h-screen  px-5 pb-20">
      <Header notSticky={true} />
      <div className="relative">
        <div className="h-[calc(100vh-5rem)]  flex pb-2 gap-10">
          <div className={`flex w-full ${isNext && 'hidden'}`}>
            <EditNext
              goPrev={() => setIsNext(!isNext)}
              content={storedContent}
              repo={repo}
              filePath={filePath}
            />
          </div>
          <div className={`flex gap-10 w-full ${!isNext && 'hidden'}`}>
            <EditPrevious
              content={storedContent}
              borderColor={borderColor}
              handleChange={handleChange}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setIsNext(!isNext)
            }}
            className="absolute top-2 right-2 inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            {isNext ? (
              <>
                Dalej
                <FiSkipForward />
              </>
            ) : (
              <>
                Powrót
                <FiSkipBack />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Edit

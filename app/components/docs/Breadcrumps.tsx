import * as React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Breadcrumps({
  gradient,
  shortName,
}: {
  gradient?: string
  shortName?: string
}) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex flex-wrap items-center space-x-1">
        <li>
          {shortName ? (
            <>
              <a href="https://algoacademy.pl" aria-label="Home page">
                <img
                  src="/algo-academy-logo-white.png"
                  className="hidden h-8 dark:lg:block"
                />
                <img
                  src="/algo-academy-logo-dark.png"
                  className="hidden h-8 dark:hidden lg:block"
                />
              </a>
              <img
                src="/favicons/android-chrome-192x192.png"
                className="h-14 lg:hidden"
              />
            </>
          ) : (
            <>
              <a href="https://algoacademy.pl" aria-label="Home page">
                <img
                  src="/algo-academy-logo-white.png"
                  className="h-8  hidden dark:block"
                />
                <img
                  src="/algo-academy-logo-dark.png"
                  className="h-8 block dark:hidden "
                />
              </a>
            </>
          )}
        </li>

        <ChevronRightIcon
          className="h-5 w-5 flex-shrink-0 text-gray-400 block"
          aria-hidden="true"
        />

        <a href="/" aria-label="Home page">
          <span
            className={`text-2xl font-bold bg-clip-text bg-gradient-to-r  to-fuchsia-500 from-sky-500  text-transparent`}
          >
            {shortName ? (
              <>
                <span className={'hidden lg:contents'}>Baza</span>
                <span className={'lg:hidden'}>B</span>
              </>
            ) : (
              <span className={'contents'}>Baza</span>
            )}
          </span>
        </a>

        {shortName && (
          <>
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 block"
              aria-hidden="true"
            />

            <a href="/" aria-label="Home page">
              <span
                className={`text-2xl font-bold bg-clip-text bg-gradient-to-r ${gradient}  text-transparent`}
              >
                <span className={'contents'}>{shortName}</span>
              </span>
            </a>
          </>
        )}
      </ol>
    </nav>
  )
}
